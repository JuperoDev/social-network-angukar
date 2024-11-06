import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentLoginComponent } from './content-display/content-login/content-login.component';
import { ContentUserComponent } from './content-display/content-user/content-user.component';
import { ContentDisplayComponent } from './content-display/content-display.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    ContentLoginComponent,
    ContentUserComponent,
    ContentDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideFirebaseApp(() => initializeApp({"projectId":"social-network-angular-24806","appId":"1:759829406828:web:92741cca7219874d7b2449","storageBucket":"social-network-angular-24806.firebasestorage.app","apiKey":"AIzaSyCkUGY4wqWHA8PBnqugi0iLJK4bgWF_Tos","authDomain":"social-network-angular-24806.firebaseapp.com","messagingSenderId":"759829406828"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
