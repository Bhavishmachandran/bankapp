import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //properties
  acno:any;
  pswd:any;
  uname:any;
  userdetails: any;

  // userdetails:any={
  //   1000:{acno:1000,username:"amal",password:1000,balance:500},
  //   1001:{acno:1001,username:"bhavi",password:1001,balance:800},
  //   1002:{acno:1002,username:"bhagi",password:1002,balance:1000} 
  //   }
  constructor(private ds:DataService, private router:Router){

  }
  //user defind function
  register(){
    var uname=this.uname;
    var acno=this.acno;
    var pswd =this.pswd;
    var userdetails=this.ds.userdetails;
    const result=this.ds.register(acno,uname,pswd)

    if(result){
      alert("registration successfull")
      this.router.navigateByUrl('')
    }
    else{
      alert("registration failure")
    }
  }

}
