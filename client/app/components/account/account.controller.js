// import _ from 'underscore';

class AccountController {
  constructor(Account,$location) {
    'ngInject';
    this.name = 'account';
    
    this.Account = Account;
    this.$location = $location;
    console.log(this.account);
  }
  submit(){
    if(this.account.id){
      this.account.$update({id:this.account.id},(res)=>{
        this.$location.url('/');
      });
    }else {
      this.account.createdAt = new Date();
      this.account.$save((res)=>{
        this.$location.url('/');
      });
    }

  }
}

export default AccountController;
