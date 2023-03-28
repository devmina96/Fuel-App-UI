import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OrderComponent } from './order/order.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { path: 'main-page', component: MainPageComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent},
  { path:'order', component: OrderComponent, canActivate: [AuthGuard]},
  { path:'', redirectTo:'main-page', pathMatch:'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
export const routingComponent =[MainPageComponent, LoginComponent, RegisterComponent, OrderComponent]
