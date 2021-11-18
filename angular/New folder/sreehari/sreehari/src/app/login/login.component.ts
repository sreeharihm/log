import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

import { IotservicesService} from './../iotservices.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string= '';
  password: string= '';
  constructor(private router:Router,  private service: IotservicesService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.username=='jinu' && this.password=='jinu'){
      this.service.vaidate(this.username,this.password).subscribe((data: any)=> {
        console.log(data);
        if(data){
          localStorage.setItem('token',data.token )
        }
      });
      this.router.navigate(['dashboard']);
    }
    else{
      alert("Invaid Login");
    }
  }
}
