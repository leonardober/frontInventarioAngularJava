import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';
import { ProductoListaComponent } from './producto-lista/producto-lista.component';

// http:localhost:4200/productos
const routes: Routes = [
  {path:'productos', component: ProductoListaComponent}, //rirulo e inico nos dirige a productos
  {path:'', redirectTo: 'productos', pathMatch:'full'}, //COINCIDENCIA COMPLETA DE LA RUTA
  {path:'agregar-producto', component: AgregarProductoComponent},
  {path: 'editar-producto/:id', component: EditarProductoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
