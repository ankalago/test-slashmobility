import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { MapsService } from './maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements OnInit {
  @ViewChild(MapInfoWindow) infoWindow!: MapInfoWindow;

  isLoading = false;
  center: google.maps.LatLngLiteral = { lat: 0, lng: 0 };
  zoom = 1;

  constructor(private mapsService: MapsService) { }

  ngOnInit(): void {
  }

  async getLocation(): Promise<any> {
    this.isLoading = true;
    this.mapsService.getPosition().then(lanLng => {
      this.center = lanLng;
      this.zoom = 15;
      this.isLoading = false;
    });
  }

  openInfoWindow(marker: MapMarker): void {
    this.infoWindow.open(marker);
  }
}
