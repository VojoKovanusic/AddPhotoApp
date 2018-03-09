import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {
  metricke 

  lat: number = 44.606000;
  lng: number = 17.860000;
  
  constructor() { }

  ngOnInit() {
  }

}
