import angular from 'angular';
import uiRouter from 'angular-ui-router';
import homeComponent from './home.component';

let homeModule = angular.module('home', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      template: '<home accounts="$resolve.accounts"></home>',
      resolve: {
        accounts: function(Account) {
          "ngInject";
          console.log('s');
          return Account.query().$promise;
        }
      }
    });
})

.component('home', homeComponent);

export default homeModule;
