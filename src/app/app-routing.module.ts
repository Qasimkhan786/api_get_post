import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as cmp from "./components/index";


const routes: Routes = [
  {
    path:'',
    redirectTo:'start',
    pathMatch:'full',
  },
  {path:'',component:cmp.DashbComponent, 
  children: [
    {path:'payment',component:cmp.PaymentComponent},
    {path:'dashboard',component:cmp.DashbComponent},
    {path:'card',component:cmp.CardsComponent},
    {path:'account',component:cmp.AccountsComponent}
  ]
},
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
