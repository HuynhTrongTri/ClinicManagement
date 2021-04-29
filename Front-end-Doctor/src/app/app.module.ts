import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { TieredMenuModule } from 'primeng/tieredmenu';
import { SlideMenuModule } from 'primeng/slidemenu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputNumberModule } from 'primeng/inputnumber';
import { MegaMenuModule } from 'primeng/megamenu';
import { MenuModule } from 'primeng/menu';
import { CommonModule } from '@angular/common';
// import { LoginModule } from './pages/login/login.module';
// import { WebReqInterceptor } from './web-req.interceptor';
import { AccordionModule } from 'primeng/accordion';
import { DropdownModule } from 'primeng/dropdown';
import { TooltipModule } from 'primeng/tooltip';
import { TabViewModule } from 'primeng/tabview';
import {InputSwitchModule} from 'primeng/inputswitch';
import { MainHeaderComponent } from './common/main-header/main-header.component';
import { MainFooterComponent } from './common/main-footer/main-footer.component';
import { SlidemenuComponent } from './common/slidemenu/slidemenu.component';
import { LoginComponent } from './common/login/login.component';
import { HomeComponent } from './common/home/home.component';
import { AppointmentDetailsComponent } from './common/appointment-details/appointment-details.component';
import { ProfileComponent } from './common/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    MainFooterComponent,
    SlidemenuComponent,
    LoginComponent,
    HomeComponent,
    AppointmentDetailsComponent,
    ProfileComponent
    
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    CheckboxModule,
    TableModule,
    DialogModule,
    ToastModule,
    ConfirmDialogModule,
    InputTextareaModule,
    HttpClientModule,
    InputTextModule,
    FormsModule,
    TieredMenuModule,
    SlideMenuModule,
    BrowserAnimationsModule,
    InputNumberModule,
    MegaMenuModule,
    MenuModule,
    AccordionModule,
    DropdownModule,
    TooltipModule,
    TabViewModule,
    InputSwitchModule
  ],
  providers: [MessageService, ConfirmationService,
    // [
    //   {
    //     provide: HTTP_INTERCEPTORS,
    //     useClass: WebReqInterceptor,
    //     multi: true,
    //   },
    // ]
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
