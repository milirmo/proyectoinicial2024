import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ruta padre --> modulo raíz
import { AppRoutingModule } from './app-routing.module';

//archivo component general
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//solo importamos componentes globales (los q aparecen en toda la página)
import { SharedModule } from './modules/shared/components/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    // GaleriaComponent,
    // ServiciosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule //importamos el shared
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
