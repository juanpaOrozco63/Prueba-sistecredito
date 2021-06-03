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
    HttpClientModule

  ],
  providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
