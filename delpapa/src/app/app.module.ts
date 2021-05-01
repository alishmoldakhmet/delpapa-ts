import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NewmainComponent } from './components/newmain/newmain.component';
import { OrderComponent } from './components/order/order.component';
import { RouterModule,Routes } from '@angular/router';
import {HttpClient} from 'selenium-webdriver/http';

const appRoutes: Routes=[
  {path: "",component:NewmainComponent},
  {path: "order",component:OrderComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    NewmainComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
