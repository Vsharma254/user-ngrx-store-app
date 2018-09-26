import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CalendarModule } from "primeng/calendar";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { JasperoConfirmationsModule } from "@jaspero/ng2-confirmations";
import {  NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { CoreModule } from "./core/core.module";
import { FormsComponent } from "./forms/forms.component";
import { PersonalDetailsComponent } from "./forms/details/personal-details/personal-details.component";
import { CourseDetailsComponent } from "./forms/details/course-details/course-details.component";
import { ExamDetailsComponent } from "./forms/details/exam-details/exam-details.component";
import { EducationDetailsComponent } from "./forms/details/education-details/education-details.component";
import { PaymentComponent } from "./forms/payment/payment.component";
import { ChooseClgComponent } from "./forms/choose-clg/choose-clg.component";
import { ReportComponent } from "./forms/report/report.component";
import { DetailsComponent } from "./forms/details/details.component";
import { MatDialogModule } from "@angular/material";
import { RouteAuthGuard } from "./utility/routeAuthGuard";
import { LocalStorageService } from "./utility/tokenService";
import { IntercepterModule } from "./utility/IntercepterModule";
import { NgbDateFRParserFormatter } from "./utility/date-formater";

import { EffectsModule } from "@ngrx/effects";
import { StoreModule, META_REDUCERS } from "@ngrx/store";
import { metaReducers, reducers } from "./store/root/store";

import { reducer as detailsReducer } from "./store/details/reducer";
import { DetailsEffect } from "./store/details/effect";
import { DetailsService } from "./store/details/service";

import { reducer as candiateReducer } from "./store/candidate/reducer";
import { CandidateEffect } from "./store/candidate/effect";
import { CandidateService } from "./store/candidate/service";
import { CandidateBanckend } from "./store/candidate/backend";

import { reducer as masterReducer } from "./store/master/reducer";
import { MasterService } from "./store/master/service";
import { MasterEffect } from "./store/master/effect";
import { MasterBanckend } from "./store/master/backend";

import { reducer as uiReducer } from "./store/ui/reducer";
import { UIEffect } from "./store/ui/effect";

import { CandidateLoginComponent } from "./candidate-login/candidate-login.component";
import { SimpleNotificationsModule } from "angular2-notifications";
import { UploaddocComponent } from "./forms/uploaddoc/uploaddoc.component";
import { ProgressBarComponent } from "./utility/progress-bar/progress-bar.component";
import { ConfirmComponent } from "./utility/confirm/confirm.component";
import { ConfirmationPopupComponent } from "./utility/confirmation-popup/confirmation-popup.component";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JasperoConfirmationsModule,
    MatDialogModule,
    CalendarModule,
    NgbModule.forRoot(),
    CoreModule,
    SimpleNotificationsModule.forRoot(),
    IntercepterModule,
    StoreModule.forRoot(reducers),
    StoreModule.forFeature("details", detailsReducer),
    StoreModule.forFeature("candidate", candiateReducer),
    StoreModule.forFeature("master", masterReducer),
    StoreModule.forFeature("ui", uiReducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([
      DetailsEffect,
      CandidateEffect,
      MasterEffect,
      UIEffect
    ])
  ],
  exports: [ConfirmComponent],
  declarations: [
    AppComponent,
    AppRoutingModule.components,
    FormsComponent,
    PersonalDetailsComponent,
    CourseDetailsComponent,
    ExamDetailsComponent,
    EducationDetailsComponent,
    PaymentComponent,
    ChooseClgComponent,
    ReportComponent,
    DetailsComponent,
    CandidateLoginComponent,
    UploaddocComponent,
    ProgressBarComponent,
    ConfirmComponent,
    ConfirmationPopupComponent
  ],
  bootstrap: [AppComponent],
  providers: [
    LocalStorageService,
    DetailsService,
    CandidateService,
    MasterService,
    {
      provide: META_REDUCERS,
      useValue: metaReducers
    },
    CandidateBanckend,
    MasterBanckend,
    RouteAuthGuard,
    {provide: NgbDateParserFormatter, useClass: NgbDateFRParserFormatter}
  ],
  entryComponents: [ConfirmComponent]
})
export class AppModule {}
