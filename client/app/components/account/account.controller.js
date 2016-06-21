// import _ from 'underscore';

class AccountController {
  constructor(Account,$location) {
    'ngInject';
    this.Account = Account;
    this.$location = $location;
    console.log(this);
    this.name = 'account';
    console.log(this.account);
  }
  submit(){
    this.account.createdAt = new Date();
    this.account.$save((res)=>{
      this.$location.url('/');
    });
  }
}

export default AccountController;
