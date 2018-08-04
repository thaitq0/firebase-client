import { MessagingService } from './messaging.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';


import { AngularFireModule } from 'angularfire2';
// for AngularFireDatabase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireDatabase } from 'angularfire2/database';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({       
      apiKey: "AIzaSyAu9N5GAhxaj16AIOy6uG1LbloXlM0Z_sw",
      authDomain: "dom-testing-project.firebaseapp.com",
      databaseURL: "https://dom-testing-project.firebaseio.com",
      projectId: "dom-testing-project",
      storageBucket: "",
      messagingSenderId: "420713942856"
    }),  
    AngularFireDatabaseModule,        
    AngularFireAuthModule   
  ],
  providers: [
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
