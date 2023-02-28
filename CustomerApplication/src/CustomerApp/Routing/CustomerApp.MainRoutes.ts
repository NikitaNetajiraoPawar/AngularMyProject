
import { CustomerComponent } from '../Customer/CustomerApp.CustomerComponent';
import { HomeComponent } from '../Home/CustomerApp.HomeComponent';
import { SupplierComponent } from '../Supplier/CustomerApp.SupplierComponent';

export const MainRoutes=[
{ path:'Home', component:HomeComponent},
{ path:'Supplier', component:SupplierComponent},
{ path:'Customer', component:CustomerComponent},
{path:'',component:HomeComponent}
]
