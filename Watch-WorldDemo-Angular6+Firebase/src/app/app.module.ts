import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthModule } from './auth/auth.module';
import { WatchModule } from './watch/watch.module';
import { HomeComponent } from './home/home.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TopsevenComponent } from './Topseven/Topseven.component';
import { MechanismsComponent } from './mechanisms/mechanisms.component';
import { BrandsHistoryComponent } from './brands-history/brands-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    UserProfileComponent,
    TopsevenComponent,
    MechanismsComponent,
    BrandsHistoryComponent
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    WatchModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
