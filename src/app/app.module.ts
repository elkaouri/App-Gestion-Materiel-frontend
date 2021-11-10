import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AllvdpComponent } from './components/allvdp/allvdp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AddmaterielComponent } from './components/addmateriel/addmateriel.component';
import { EditmaterielComponent } from './components/editmateriel/editmateriel.component';
import { LoginComponent } from './components/login/login.component';
import { AdduserComponent } from './components/adduser/adduser.component';
import { UpdateuserComponent } from './components/updateuser/updateuser.component';
import { AuthGuard } from './auth.guard';
import { InvoiceComponent } from './components/invoice/invoice.component';
import { AddtypeComponent } from './components/addtype/addtype.component';
import { QrcodeComponent } from './components/qrcode/qrcode.component';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeallComponent } from './components/qrcodeall/qrcodeall.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'all-vdp', component: AllvdpComponent, canActivate: [AuthGuard] },
  { path: 'add-materiel', component: AddmaterielComponent, canActivate: [AuthGuard] },
  { path: 'add-user', component: AdduserComponent, canActivate: [AuthGuard] },
  { path: 'add-type', component: AddtypeComponent, canActivate: [AuthGuard] },
  { path: 'update-user', component: UpdateuserComponent },
  { path: 'invoice/:data/:name', component: InvoiceComponent, canActivate: [AuthGuard] },
  { path: 'edit-materiel/:id', component: EditmaterielComponent, canActivate: [AuthGuard] },
  { path: 'Qrcode/:id', component: QrcodeComponent, canActivate: [AuthGuard] },
  { path: 'Qrcodeall', component: QrcodeallComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AllvdpComponent,
    AddmaterielComponent,
    EditmaterielComponent,
    LoginComponent,
    AdduserComponent,
    UpdateuserComponent,
    InvoiceComponent,
    AddtypeComponent,
    QrcodeComponent,
    QrcodeallComponent,

  ],
  imports: [
    BrowserModule,
    QRCodeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
