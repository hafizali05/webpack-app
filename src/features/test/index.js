// import homeTemplate from '../src/features/test/test.html';
import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './test.routes';
import testController from './test.controller';

export default angular.module('app.test', [uirouter])
    .config(routing)
    .controller('testController', testController)
    .name;