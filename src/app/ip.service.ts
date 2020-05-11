import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()

export class IpService {
  constructor(private httpClient :HttpClient) {
  }

  getIp(){
   return  fetch('http://ip.jsontest.com/')
      .then(res => res.json())
      .then(resJson => resJson.id);

  }
}

