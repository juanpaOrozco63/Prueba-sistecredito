// Core
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';

// Routes
import { ROUTES } from './app.routes';
import { RouterModule } from '@angular/router';
//Firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestore } from '@angular/fire/firestore';
// Http
import { HttpClientModule } from '@angular/common/http';
import { CreditComponent } from './components/credit/credit.component';
import { FooterComponent } from './components/shared/footer/footer.component';
// NGx
import {NgxPaginationModule} from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Forms
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CreditComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES, { useHash: true }),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    NgxPaginationModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
