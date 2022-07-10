import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import '../styles.css';

import { AppComponent } from './app.component';
import { LearnNgIfComponent } from './learn-ng-if/learn-ng-if.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [AppComponent, LearnNgIfComponent, NgForComponent, PipesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
