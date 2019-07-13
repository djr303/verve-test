const path = require('path');
const express = require('express');
const mustache = require('mustache-express');
const enforce = require('express-sslify');
const throng = require('throng');
const compression = require('compression');

const ROOT_PATH = path.resolve(__dirname);
const ASSETS_PATH = path.resolve(ROOT_PATH, 'assets');
const PORT = process.env.PORT || 8700;
const GRAPHQL_PORT = process.env.PORT ? String(Number(process.env.PORT) + 1) : 8701;
const WORKERS = process.env.WEB_CONCURRENCY || 1;
const GATEWAY = `http://localhost:${GRAPHQL_PORT}/graphql`;

const server = express();
const IS_DEV = server.get('env') !== 'production';

const graphQLServer = require('./db/server');
graphQLServer.listen(GRAPHQL_PORT);

const checkResponseEncoding = (req, res) => {
    if (res.get('Content-Encoding') === 'gzip') {
        return false;
    }
    return compression.filter(req, res);
};

const setContentHeaders = (res, assetPath) => {
    if (!IS_DEV && assetPath.endsWith('.js')) {
        res.setHeader('Content-Encoding', 'gzip');
    }
};

const startApp = () => {
    server.listen(PORT, () => {
        console.log(`Server running on PORT ${PORT}`);
    });
}

if (!IS_DEV) {
    server.use(enforce.HTTPS({ trustProtoHeader: true }));
}

server.disable('x-powered-by');
server.engine('mustache', mustache());
server.set('view engine', 'mustache');
server.set('views', ROOT_PATH);
server.use('/assets', express.static(ASSETS_PATH, {
    setHeaders: (res, assetPath) => setContentHeaders(res, assetPath),
}));
server.get('/*', (req, res) => {
    const windowObject = {
        gateway: GATEWAY,
    };
    const js = '/assets/app.bundle.js';
    const css = '/assets/app.bundle.css';
    res.render('index', {
        bundle: { js, css },
        windowObject: JSON.stringify(windowObject),
    });
});
server.use(compression({
    filter: (req, res) => checkResponseEncoding(req, res),
}));

if (IS_DEV) {
    startApp();
} else {
    throng(WORKERS, startApp);
}

module.exports = server;
