import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './items/items.component';
import { ListarComponent } from './Persona/listar/listar.component';

const routes: Routes = [
  {path:'', component:ItemComponent},
  {path:'home', component:ItemComponent},
  {path:'lista', component:ListarComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}, 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
