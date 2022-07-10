import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '../styles.css';

import { AppComponent } from './app.component';
import { LearnNgIfComponent } from './learn-ng-if/learn-ng-if.component';

@NgModule({
  declarations: [AppComponent, LearnNgIfComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
