routes.$inject = ['$stateProvider'];

import test from './test.html'

export default function routes($stateProvider) {
    $stateProvider
        .state('test', {
            url: '/test',
            controller: 'testController',
            template: test,
            controllerAs: 'test'
        });
}