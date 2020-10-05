import { RouteCalculationService } from './services/route-calculation.service';
import { FreightResultRowComponent } from './components/freight-result-row/freight-result-row.component';
import { RouteDataService } from './services/route-data.service';
import { FreightSearchResultComponent } from './components/freight-search-result/freight-search-result.component';
import { FreightSearchComponent } from './components/freight-search/freight-search.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { AlertComponent } from './components/alert/alert.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './services/auth.guard';
import { AlertService } from './services/alert.service';
import { AuthenticationService } from './services/authentication.service';

import { JwtInterceptor } from './helpers/fakebackend/jwt.interceptor';
import { fakeBackendProvider } from './helpers/fakebackend/fake-backend';
import { SelectionMenuComponent } from './components/selection-menu/selection-menu.component';
import { FreightSearchResultViewComponent } from './components/freight-search-result-view/freight-search-result-view.component';

@NgModule({    
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        HttpClientModule,
        ReactiveFormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        HeaderComponent,
        SelectionMenuComponent,
        FreightSearchComponent,
        FreightSearchResultComponent,
        FreightResultRowComponent,
        FreightSearchResultViewComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },

        // provider used to create fake backend
        fakeBackendProvider,
        // provider used for collection of routes
        RouteDataService,
        RouteCalculationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
