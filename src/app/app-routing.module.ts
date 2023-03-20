import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as cmp from "./components/index";


const routes: Routes = [
  {
    path:'',
    redirectTo:'start',
    pathMatch:'full',
  },
  {path:'',component:cmp.UsertableComponent, 
  children: [
    {path:'payment',component:cmp.PaymentComponent,
    children:[
      {path:'makepayment',component:cmp.MakepayComponent},
    ]
  },
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
