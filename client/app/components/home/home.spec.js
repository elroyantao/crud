// import angular from 'angular';
import HomeModule from './home'
import HomeController from './home.controller';
import AccountResource from '../../common/resources/accounts';

import Common from '../../common/common';

describe('Home', () => {
  let $rootScope, makeController;

  beforeEach(window.module(HomeModule.name));
  beforeEach(inject((_$rootScope_) => {
    $rootScope = _$rootScope_;
    makeController = () => {
      return new HomeController();
    };
  }));

  describe('Module', () => {
  });

  describe('Controller', () => {
    it('removeAccount should remove an account',()=>{
      let controller = makeController();

      let accounts = [{id:1},{id:2},{id:3}];
      controller.accounts = accounts;
      // controller.accounts.length.should.equal(3);
      controller.removeAccount(accounts[1]);
      controller.accounts.lenth.should.equal(2);
    })
  });

  describe('Template', () => {
  });

  describe('Component', () => {
  });
});
