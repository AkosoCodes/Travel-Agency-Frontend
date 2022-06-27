import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './pages/home/home.component';
import { SplineComponent } from './pages/home/spline/spline.component';
import { MainBannerComponent } from './pages/home/main-banner/main-banner.component';
import { MatIconModule } from "@angular/material/icon";
import { CarouselComponent } from './pages/home/carousel/carousel.component';
import { DestinationService } from './services/destinations.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ToSComponent } from './pages/to-s/to-s.component';
import { AppRoutingModule } from './app.routing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { PolicyComponent } from './components/policy/policy.component';
import { CookiesComponent } from './pages/cookies/cookies.component';
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { StarRatingModule } from 'angular-star-rating';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChipComponent } from './components/chip/chip.component';
import { AdminComponent } from './pages/admin/admin.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/users.service';
import { AdminDestComponent } from './pages/admin/admin-dest/admin-dest.component';
import { AdminUserComponent } from './pages/admin/admin-user/admin-user.component';
import { AdminBookingComponent } from './pages/admin/admin-booking/admin-booking.component';
import { BookingService } from './services/bookings.service';
import { DiscoveryComponent } from './pages/discovery/discovery.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { MatNativeDateModule } from '@angular/material/core';
import { SupportComponent } from './pages/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    SplineComponent,
    MainBannerComponent,
    CarouselComponent,
    ToSComponent,
    PolicyComponent,
    CookiesComponent,
    PrivacyComponent,
    ChipComponent,
    AdminComponent,
    AdminDestComponent,
    AdminUserComponent,
    AdminBookingComponent,
    DiscoveryComponent,
    ErrorPageComponent,
    SupportComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
    AppRoutingModule,
    StarRatingModule.forRoot(),
    MatChipsModule,
    MatFormFieldModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [DestinationService, MatSnackBarModule, UserService, BookingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
