import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as cmp from "./components/index";


const routes: Routes = [
  {
    path:'',
    redirectTo:'start',
    pathMatch:'full',
  },
  {path:'',component:cmp.UsertableComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
