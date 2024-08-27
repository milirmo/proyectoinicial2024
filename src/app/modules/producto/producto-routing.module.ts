import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductoComponent } from './page/producto/producto.component';
import { AlimentacionComponent } from './page/alimentacion/alimentacion.component';
import { JugueteComponent } from './page/juguete/juguete.component';
import { IndumentariaComponent } from './page/indumentaria/indumentaria.component';

const routes: Routes = [

  {
    path: "productos", component: ProductoComponent
  },

  {
    path: "alimentacion", component: AlimentacionComponent
  },

  {
    path: "juguete", component: JugueteComponent
  },

  {
    path: "indumentaria", component: IndumentariaComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductoRoutingModule { }
