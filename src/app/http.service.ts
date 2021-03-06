import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, shareReplay, catchError, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  API_KEY="bJvc2F4JOfyXfS6nDZ3HNbsszbCsfQiD";

  constructor(private HttpClientService: HttpClient) {}

  get(baseURL:string, q?:string,language?:string,metric?:string) :Observable<any> {
    debugger
    const params = new HttpParams({fromObject: {apikey: this.API_KEY, q,language, metric}});

   return this.HttpClientService.get(baseURL, {params});
  }
 
  }
