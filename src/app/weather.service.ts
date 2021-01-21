import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
language="he";
  constructor( private  httpService: HttpService) { }
  getAutoComplete(paramCity: string): Observable<any> {
    const url = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete`;
    return this.httpService.get(url, `${paramCity}`,this.language);
  }

  get5DaysOfForecasts(locationKey: string): Observable<any> {
    const url = `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}`;
    return this.httpService.get(url,"",this.language,"false");
  }


  getCurrentConditions(locationKey: string): Observable<any> {
    const url = `http://dataservice.accuweather.com/currentconditions/v1/${locationKey}`;
    return this.httpService.get(url,"",this.language,"false");
  }
}
