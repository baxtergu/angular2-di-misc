import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SimpleService } from './services/simple.service';
import { ParamService } from './services/param.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    SimpleService,
    {
      provide: ParamService,
      useFactory: (): ParamService => new ParamService('YOLO')
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
