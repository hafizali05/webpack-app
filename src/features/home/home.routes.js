routes.$inject = ['$stateProvider'];
import home from 'homeTpl.html'
export default function routes($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeController',
            template: home,
            controllerAs: 'home'
        });
}