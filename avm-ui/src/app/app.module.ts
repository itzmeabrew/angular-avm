import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { AqCardComponent } from './component/info-cards/aq-card/aq-card.component';
import { TmpCardComponent } from './component/info-cards/tmp-card/tmp-card.component';
import { AudCardComponent } from './component/info-cards/aud-card/aud-card.component';
import { DisplayCardComponent } from './component/info-cards/display-card/display-card.component';
import { LightCardComponent } from './component/info-cards/light-card/light-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AqCardComponent,
    TmpCardComponent,
    AudCardComponent,
    DisplayCardComponent,
    LightCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
