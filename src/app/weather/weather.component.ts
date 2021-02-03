import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
@Input() currentWeather:any;
@Input() nextWeather:any;
 @Input() unit:any;
  constructor() {
    debugger
   }

  ngOnInit(): void {
    debugger
  }

}
