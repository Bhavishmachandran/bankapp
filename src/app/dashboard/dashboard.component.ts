import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
//paramtr for deposite
  acno:any;
  pswd:any;
  amount:any;

  // paramtr for withdraw
  acno1:any;
  pswd1:any;
  amount1:any;

  constructor(private ds:DataService){

  }

  deposite(){
    var acno=this.acno
    var pswd=this.pswd
    var amount=this.amount
    // alert("deposite is ready")
    const result=this.ds.deposite(acno,pswd,amount)
    if(result){
      alert(`${amount} is credicted to ${acno} and balance is ${result}`)
    }
    else{
      alert('invalid')
    }
  }

  withdraw(){
    var acno=this.acno1
    var pswd=this.pswd1
    var amount=this.amount1
    // alert("withdraw is ready")
    const result=this.ds.withdraw(acno,pswd,amount)
    if(result){
      alert(`${amount} is debited from ${acno} and balance is ${result}`)
    }
    else{
      alert('invalid')
    }
  }
}
