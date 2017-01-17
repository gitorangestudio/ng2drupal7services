import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NodeService } from './d7services/node/node.service';
import { MainService } from './d7services/main/main.service';
import { AppComponent } from './app.component';
import { CookieService } from 'angular2-cookie/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [MainService, NodeService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
