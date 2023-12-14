import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MenupageComponent } from './pages/menupage/menupage.component';
import { OrderdetailsComponent } from './pages/orderdetails/orderdetails.component';
import { OrderhistoryComponent } from './pages/orderhistory/orderhistory.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'Home/Menu',component:MenuComponent},
  {path: 'Home',component:HomeComponent},
  {path:'contact',component:ContactComponent},
  {path:'about',component:AboutComponent},
  {path:'menu/:id',component:MenupageComponent},
  {path:'Home/OrderDetails',component:OrderdetailsComponent},
  {path:'Home/OrderHistory',component:OrderhistoryComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
