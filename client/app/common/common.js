import angular from 'angular';

import account from './resources/accounts';

let commonModule = angular.module('app.common', []).factory('Account', account);

export default commonModule;
