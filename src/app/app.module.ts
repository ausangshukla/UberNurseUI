import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonicApp, IonicErrorHandler, IonicModule, NavController } from 'ionic-angular';

import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { Diagnostic } from '@ionic-native/diagnostic/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Keyboard } from '@ionic-native/keyboard/ngx';


import { SentryErrorHandler } from '../services/sentry-errorhandler'

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AdminMenus } from '../pages/home/admin-menus';
import { TempMenus } from '../pages/home/temp-menus';
import { Login } from '../pages/login/login';
import { PasswordReset } from '../pages/login/password-reset'

import { IonicStorageModule } from '@ionic/storage';
import { AngularTokenService, AngularTokenModule } from 'angular-token';

import { UserPic } from '../pages/user-pic/user-pic';
import { UserDoc } from '../pages/user-doc/user-doc';
import { UserTabs } from '../pages/users/user-tabs';

import { CareHomes } from '../pages/care-homes/care-homes';
import { QrCode } from '../pages/care-homes/qr_code';
import { CareHomeSearch } from '../pages/care-homes/care-home-search';
import { CareHomeForm } from '../pages/care-homes/care-home-form';
import { CareHomeDetails } from '../pages/care-homes/care-home-details';
import { CareHomeBankingDetails } from '../pages/care-homes/care-home-banking-details';

import { HttpModule, Http } from '@angular/http';
import { MomentModule } from 'ngx-moment';
import { UserApi } from '../providers/user-api'
import { UserDocApi } from '../providers/user-doc-api'
import { Config } from '../providers/config'
import { CareHomeApi } from '../providers/care-home-api'
import { CqcRecordApi } from '../providers/cqc-record-api'
import { PaymentApi } from '../providers/payment-api'
import { RatingApi } from '../providers/rating-api'
import { StaffingRequestApi } from '../providers/staffing-request-api'
import { ShiftApi } from '../providers/shift-api'
import { ReferralApi } from '../providers/referral-api'

import { ResponseUtility } from '../providers/response-utility'
import { LoginProvider } from '../providers/login-provider';
import { PostCodeApi } from '../providers/postcode-api';
import { HomeEvents } from '../providers/home-events';


import { HttpClientModule } from '@angular/common/http';
import { AgencyApi } from '../providers/agency-api';
import { AgencyUserMappingApi } from '../providers/agency-user-mapping-api';
import { AgencyCareHomeMappingApi } from '../providers/agency-care-home-mapping-api';
import { RecurringRequestApi } from '../providers/recurring-request-api';
import { CommonModule } from '@angular/common';

import { ContactApi } from '../providers/contact-api';
import { ReferenceApi } from '../providers/reference-api';
import { ContactPage } from '../pages/static/contact';
import { HelpPage } from '../pages/static/help';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AdminMenus,
    TempMenus,
    Login,
    PasswordReset,
    UserPic,
    UserDoc,
    UserTabs,
    CareHomes,
    CareHomeForm,
    CareHomeDetails,
    CareHomeSearch,
    CareHomeBankingDetails,
    QrCode,
    ContactPage,
    HelpPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule,
    MomentModule,
    CommonModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularTokenModule.forRoot({
      updatePasswordPath: "/auth/password"
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AdminMenus,
    TempMenus,
    Login,
    PasswordReset,
    UserPic,
    UserDoc,
    UserTabs,
    CareHomes,
    CareHomeForm,
    CareHomeDetails,
    CareHomeSearch,
    CareHomeBankingDetails,
    QrCode,
    ContactPage,
    HelpPage
  ],

  providers: [
    Config,
    LoginProvider,
    UserApi,
    UserDocApi,
    RatingApi,
    AgencyApi,
    AgencyUserMappingApi,
    AgencyCareHomeMappingApi,
    CareHomeApi,
    CqcRecordApi,
    PostCodeApi,
    StaffingRequestApi,
    RecurringRequestApi,
    ShiftApi,
    PaymentApi,
    ResponseUtility,
    StatusBar,
    SplashScreen,
    Keyboard,
    AngularTokenModule,
    Camera,
    Diagnostic,
    File,
    FilePath,
    FileTransfer,
    HomeEvents,
    ReferralApi,
    ContactApi,
    ReferenceApi,
    BarcodeScanner, 
    { provide: ErrorHandler, useClass: SentryErrorHandler }
  ]
})
export class AppModule { }

