import HomeModule from './home'
import HomeController from './home.controller';

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
  });

  describe('Template', () => {
  });

  describe('Component', () => {
  });
});
