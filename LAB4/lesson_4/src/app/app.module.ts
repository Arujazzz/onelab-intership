import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ZoomDirective } from './shared/directive/zoom.directive';
import { FilterPipe } from './shared/pipe/filter.pipe';
import { PipeExampleComponent } from './pipe-example/pipe-example.component';


@NgModule({
  declarations: [
    AppComponent,
    ZoomDirective,
    FilterPipe,
    PipeExampleComponent
  ],
  imports: [
    BrowserModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
