import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductosComponent } from './agregar-productos/agregar-productos.component';
import { ConsultarProductosComponent } from './consultar-productos/consultar-productos.component';
import { LoginComponent } from './login/login.component'

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'consultar',component:ConsultarProductosComponent},
  {path: 'agregar',component:AgregarProductosComponent},
  {path:'editar/:productoId',component: AgregarProductosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
