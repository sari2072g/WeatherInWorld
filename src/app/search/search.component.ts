import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, filter, switchMap, takeUntil } from 'rxjs/operators';
import { AutoCompleteSuggestions } from '../models/AutoCompleteSuggestions';
import { Forecasts } from '../models/Forecasts';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  cityName: string;
  autoCompleteValue: any;
  autoCompletedSuggestions:any[]=[];
  currentWether:any[]=[];
  weatherList: Forecasts[];
  constructor(private weatherService:WeatherService) { }
  subject = new Subject();
  private ngUnsubscribe: Subject<any> = new Subject();
  ngOnInit() {
    debugger;
  
}
onSearchChange(autoCompleteInput:any){

 this.weatherService.getAutoComplete(autoCompleteInput).
  subscribe((suggestions: AutoCompleteSuggestions[]) => {
    debugger
    debounceTime(300),
    this.autoCompletedSuggestions = suggestions;
  });

} 

  selectSuggestion(suggestion: AutoCompleteSuggestions) {
    debugger
    this.cityName = `${suggestion.LocalizedName},${suggestion.Country.LocalizedName}`;
    this.autoCompleteValue = this.cityName;

     this.weatherService.getCurrentConditions(suggestion.Key).subscribe(weather=>{
      debugger
    this.currentWether = weather;
    });
  this.weatherService.get5DaysOfForecasts(suggestion.Key).subscribe(weather=>{
     debugger
   this.weatherList =weather.DailyForecasts;
   });
    this.autoCompletedSuggestions = null;
  }

}
