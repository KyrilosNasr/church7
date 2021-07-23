import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/auth/login/login.component';
import { SignUpComponent } from './components/auth/sign-up/sign-up.component';
import { CartComponent } from './components/cart/cart.component';
import { GoodsComponent } from './components/goods/goods.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    CartComponent,
    GoodsComponent,
    UsersComponent,
    OrdersComponent,
    NotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyBYRvcQoVdXi5MBBZI40aU4VJs0SFlMq1E',
      authDomain: 'furniture-house-6121e.firebaseapp.com',
      projectId: 'furniture-house-6121e',
      storageBucket: 'furniture-house-6121e.appspot.com',
      messagingSenderId: '696599994337',
      appId: '1:696599994337:web:6e488c13c59b4f259d3ca0',
      measurementId: 'G-PKXNF5TDJ8',
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
