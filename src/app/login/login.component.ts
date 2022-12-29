import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent { 
               //2nd last execution     // its a class which contain collection of properties and methodes
  constructor(private router:Router,private ds:DataService)
  {                          // execute first // used for object initialization // its automatically invokes when an object is created
  }

aim="your perfect banking partner" //properties

account="please enter ur acno"
 
acno:any;
pswd:any;

  
// acno=""
// pswd=""

  // user defind function execute last

    login(){
      var acno=this.acno;
      var pswd=this.pswd;
      var userdetails=this.ds.userdetails

      const result=this.ds.login(acno,pswd)
        if(result){
          alert("login successfull")
          this.router.navigateByUrl('dashboard')
        }
        else{
          alert("login failure")
        }
    }




  // login(a:any,p:any){
  //   // alert('login clicked');
  //   var acno=a.value;
  //   var pswd=p.value;
  //   var userdetails=this.userdetails
  //   if(acno in userdetails)
  //   {
  //     if(pswd== userdetails[acno]['password']){
  //       alert("login successfull")
  //     }
  //     else{
  //       alert("incorrect password")
  //     }
  //   }
  //   else{
  //     alert("user not found")
  //   }
  // }

  // acnochange(event:any){
  //   // console.log(event.target.value);
  //   this.acno=event.target.value;
  //   console.log(this.acno);
  // }
  // pswdchange(event:any){
  //   // console.log(event.target.value);
  //   this.pswd=event.target.value;
  //   console.log(this.pswd);
  // } 

  }
  


