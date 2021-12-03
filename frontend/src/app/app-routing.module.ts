import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';

const routes: Routes = [
  {path:'',component:ConsultarProductosComponent},
  {path: 'agregar',component:AgregarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
