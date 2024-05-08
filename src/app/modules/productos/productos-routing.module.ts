import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './pages/productos/productos.component';
import { AlimentacionComponent } from './pages/alimentacion/alimentacion.component';
import { JugueteComponent } from './pages/juguete/juguete.component';
import { IndumentariaComponent } from './pages/indumentaria/indumentaria.component';

const routes: Routes = [

  //ruteo para ir a las distintas categorias de productos

  {
    path: "productos", component:ProductosComponent
  },

  {
    path: "alimentacion", component:AlimentacionComponent
  },

  {
    path: "juguete", component:JugueteComponent
  },

  {
    path: "indumentaria", component:IndumentariaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
