const { JsonGraphqlExpress } = require('json-graphql-server');
const data = require('./data');

require('reify');
var path = require('path');
var express = require('express');
var cors = require('cors');
var JsonGraphqlServer = require('json-graphql-server/lib/json-graphql-server.node.min').default;

var app = express();

app.use(cors());
app.use('/', JsonGraphqlServer(data));

module.exports = app;