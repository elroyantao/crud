import angular from 'angular';
import Home from './home/home';
import Account from './account/account';

let componentModule = angular.module('app.components', [
  Home.name,
  Account.name
]);

export default componentModule;
