import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NodeService } from './d7services/node/node.service';
import { MainService } from './d7services/main/main.service';
import { AppComponent } from './app.component';
import { CookieService } from 'angular2-cookie/core';
import { LoginComponent } from './components/user/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [MainService, NodeService, CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
