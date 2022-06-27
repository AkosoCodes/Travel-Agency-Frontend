import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin/admin.component";
import { CookiesComponent } from "./pages/cookies/cookies.component";
import { HomeComponent } from "./pages/home/home.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";
import { ToSComponent } from "./pages/to-s/to-s.component";
import { DiscoveryComponent } from "./pages/discovery/discovery.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component"
import { SupportComponent } from "./pages/support/support.component";


// Routes
const routes : Routes = [
    {path: "", redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'to-s', component: ToSComponent},
    {path: 'cookies', component: CookiesComponent},
    {path: 'privacy', component: PrivacyComponent},
    {path: 'admin', component: AdminComponent},
    {path: 'discovery', component: DiscoveryComponent},
    {path: '404', component: ErrorPageComponent},
    {path: 'support', component: SupportComponent},

]

@NgModule({

    declarations:[],
    imports: [
        CommonModule,
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],

})

export class AppRoutingModule {}