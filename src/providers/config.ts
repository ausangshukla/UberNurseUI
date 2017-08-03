import { Injectable } from '@angular/core';


@Injectable()
export class Config {

  private dev = {
    API_URL: "http://192.168.0.8:3000",
    //API_URL: "http://localhost:3000",
    ENV: "dev",
    GA_ID: 'UA-103042137-1'
  };

  private test = {
    API_URL: "http://localhost:3000",
    ENV: "test",
    GA_ID: 'UA-103042137-1'
  };

  private prod = {
    API_URL: "http://dev.connuct.co.uk",
    //API_URL: "http://35.176.41.207",
    ENV: "prod",
    GA_ID: 'UA-103042137-1'
  };
  
  public props = this.prod;

  constructor() {
    
  }
  
}
