import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CustomerComponent } from './Customer/CustomerApp.CustomerComponent';
import { MainRoutes }  from './Routing/CustomerApp.MainRoutes'
import { HomeComponent } from './Home/CustomerApp.HomeComponent';
import { MasterPageComponent } from './Home/CustomerApp.MasterPageComponent'
import { SupplierComponent } from './Supplier/CustomerApp.SupplierComponent';

@NgModule({
  declarations: [
    CustomerComponent,HomeComponent,SupplierComponent,MasterPageComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    RouterModule.forRoot(MainRoutes)
  ],
  providers: [],
  bootstrap: [MasterPageComponent]
})
export class CustomerModule { }
