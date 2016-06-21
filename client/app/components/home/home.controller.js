import _ from 'underscore';

class HomeController {
  constructor(Account) {
    'ngInject';
    this.Account = Account;
    this.name = 'home';
  }
  removeAccount(account){
    this.Account.delete({id:account.id},{},()=>{
      this.accounts = _.without(this.accounts,account);
    });
  }
}

export default HomeController;
