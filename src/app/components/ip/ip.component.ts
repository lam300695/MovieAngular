import { Component } from '@angular/core';
import {IpService} from "../../ip.service";
// import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers : [IpService]
})
export class IpComponent {
  ip: string;

  constructor(private ipService :IpService ) {
    this.ipService.getIp()
      .then(ip => this.ip = ip)
      .catch(err => console.log(err))




      // fetch('http://ip.jsontest.com/')
      //   .then(res => res.json())
      //   .then(resJson => this.ip = resJson.ip)
      //   .catch(err => console.log(err));
  }
}
