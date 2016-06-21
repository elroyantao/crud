import template from './account.html';
import controller from './account.controller';

let accountComponent = {
  restrict: 'E',
  bindings: {
    account : '='
  },
  template,
  controller,
  controllerAs: 'ac'
};

export default accountComponent;
