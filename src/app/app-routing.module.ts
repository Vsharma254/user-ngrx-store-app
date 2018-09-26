import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FormsComponent } from './forms/forms.component';
import { DetailsComponent } from './forms/details/details.component';
import { UploaddocComponent } from './forms/uploaddoc/uploaddoc.component';
import { PaymentComponent } from './forms/payment/payment.component';
import { ChooseClgComponent } from './forms/choose-clg/choose-clg.component';
import { ReportComponent } from './forms/report/report.component';
import { CandidateLoginComponent } from './candidate-login/candidate-login.component';
import { RouteAuthGuard } from './utility/routeAuthGuard';

const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: '/uksee/details/all', canActivate:[RouteAuthGuard] },
    { path: 'uksee', component: HomeComponent,
    children:[ { path: 'candidatelogin', component:CandidateLoginComponent },
    { path: 'details', component: FormsComponent, canActivate:[RouteAuthGuard], children:[
    { path: 'all', component:DetailsComponent, canActivate:[RouteAuthGuard] }, 
    { path: 'payment', component: PaymentComponent, canActivate:[RouteAuthGuard]},
    { path: 'uploaddoc', component: UploaddocComponent, canActivate:[RouteAuthGuard]},    
    { path: 'choosecollege', component: ChooseClgComponent, canActivate:[RouteAuthGuard]},
    { path: 'report', component: ReportComponent, canActivate:[RouteAuthGuard]}     
    ] }]}
     ,
    { path: '**', redirectTo: '/uksee/details/all' } 
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [ RouterModule ]
})
export class AppRoutingModule {
    static components = [ HomeComponent ];
}