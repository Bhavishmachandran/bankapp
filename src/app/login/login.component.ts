import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {              //2nd last execution     // its a class which contain collection of properties and methodes
  constructor(){                          //first execution // used for object initialization // its automatically invokes when an object is created
  }

aim="your perfect banking partner" //properties

account="please enter ur acno"
 
// acno:any;
acno="any"
pswd="any"

  userdetails:any={
    1000:{acno:1000,username:"amal",password:1000,balance:500},
    1001:{acno:1001,username:"bhavi",password:1001,balance:800},
    1002:{acno:1002,username:"bhagi",password:1002,balance:1000} 
    }
    // user defind function execute last
  login(){
    // alert('login clicked');
    var acno=this.acno;
    var pswd=this.pswd;
    var userdetails=this.userdetails
    if(acno in userdetails)
    {
      if(pswd== userdetails[acno]['password']){
        alert("login successfull")
      }
      else{
        alert("incorrect password")
      }
    }
    else{
      alert("user not found")
    }
  }

  acnochange(event:any){
    // console.log(event.target.value);
    this.acno=event.target.value;
    console.log(this.acno);
  }
  pswdchange(event:any){
    // console.log(event.target.value);
    this.pswd=event.target.value;
    console.log(this.pswd);
  } 

  }
  


