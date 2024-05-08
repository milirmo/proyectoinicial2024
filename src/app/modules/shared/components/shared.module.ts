import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//importamos toolbar (barra de herramientas) desde AM
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; //barra de herramientas
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu'; //menu para productos



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule

  ], 
  exports:[
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class SharedModule { }
