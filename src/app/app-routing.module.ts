import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './pages/carrito/carrito.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductosComponent } from './pages/productos/productos.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'', component:HomeComponent},
  {path:'productos', component:ProductosComponent},
  {path:'carrito', component:CarritoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
