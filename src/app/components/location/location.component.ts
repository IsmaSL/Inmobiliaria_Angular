import { Component } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent {
  options: any;

  overlays: any[];

  ngOnInit() {
    this.options = {
      center: { lat: 18.8536482, lng: -97.098483 },
      zoom: 16
    };
  }
}
