import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { IotservicesService} from './../iotservices.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.scss']
})
export class InputformComponent implements OnInit {
  deviceId: string='';
  latitude: string='';
  longitude: string='';
  data: string='';
  constructor(private router:Router,  private service: IotservicesService) { }

  ngOnInit(): void {
  }
  login(){
    let req=[{
      'deviceId': this.deviceId,
      'latitude': parseFloat(this.latitude),
      'longitude': parseFloat(this.longitude),
      'createdDate': new Date().toISOString(),
      'data': this.data,
    }];
    this.service.post(req).subscribe((data: any)=> {
      console.log(data);
    });
    this.router.navigate(['dashboard']);
    
  }

}
