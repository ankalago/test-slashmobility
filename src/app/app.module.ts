import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MaterialModule } from './components/shared/material/material.module';
import { ContentComponent } from './components/content/content.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { MapsComponent } from './components/maps/maps.component';
import { MapsModule } from './components/maps/maps.module';
import { FormatLanLngPipe } from './components/shared/pipes/format-lan-lng.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    UserProfileComponent,
    MapsComponent,
    FormatLanLngPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
