import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { CardComponent } from './card/card.component';
import {FormsModule} from "@angular/forms";
import { VoiceComponent } from './voice/voice.component';
import { EnManComponent } from './voice/en-man/en-man.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    VoiceComponent,
    EnManComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


