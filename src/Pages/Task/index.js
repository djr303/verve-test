import { compose } from 'react-apollo';

import TaskQuery from './Task.query.jsx';
import Task from './Task.jsx';

export default compose(
    TaskQuery,
)(Task);
