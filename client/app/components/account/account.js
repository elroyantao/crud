import angular from 'angular';
import uiRouter from 'angular-ui-router';
import accountComponent from './account.component';

let accountModule = angular.module('account', [uiRouter]).config(($stateProvider) => {
  "ngInject";

  $stateProvider.state('add', {
    url: '/account',
    template: '<account account="$resolve.account" ></account>',
    resolve: {
      account: function(Account) {
        "ngInject";
        return new Account();
      }
    }
  }).state('edit', {
    url: '/account/:id',
    template: '<account account="$resolve.account" ></account>',
    resolve: {
      account: function(Account,$stateParams) {
        "ngInject";
        return Account.get({id:$stateParams.id});
      }
    }
  });
}).component('account', accountComponent);

export default accountModule;
