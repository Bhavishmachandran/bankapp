import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  userdetails:any={
    1000:{acno:1000,username:"amal",password:1000,balance:500},
    1001:{acno:1001,username:"bhavi",password:1001,balance:800},
    1002:{acno:1002,username:"bhagi",password:1002,balance:1000} 
    }
  constructor() { }
  register(acno:any,username:any,password:any){
    
    var userdetails=this.userdetails

    if(acno in this.userdetails){
      return false;
    }
    else{
      userdetails[acno]={
      acno:acno,
      username:username,
      password:password,
      balance:0
      }
      return true;
    }
  }

  login(acno:any,pswd:any){
    var userdetails=this.userdetails;

    if(acno in this.userdetails){
      if(pswd==this.userdetails[acno]['password']){
        return true;

      }
      else{
        alert('invalid password')
        return false
      }
    }
    else{
      alert('invalid user')
        return false
    }
  }

  deposite(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userdetails=this.userdetails;
    if(acno in this.userdetails)
    {
      if(pswd==this.userdetails[acno]['password']){
        userdetails[acno]['balance']+=amount;
        return userdetails[acno]['balance']
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid userdetails")
      return false
    }
  }
  withdraw(acno:any,pswd:any,amt:any){
    var amount=parseInt(amt)
    let userdetails=this.userdetails;
    if(acno in this.userdetails)
    {
      if(pswd==this.userdetails[acno]['password']){
        if(userdetails[acno]['balance'] > amount){
          userdetails[acno]['balance'] -= amount;
          return userdetails[acno]['balance']
        }
      }
      else{
        alert("invalid password")
        return false;
      }
    }
    else{
      alert("invalid userdetails")
      return false
    }
  }
}
