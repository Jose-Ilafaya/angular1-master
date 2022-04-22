import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { CarritoComponent } from './pages/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    HomeComponent,
    FooterComponent,
    ProductosComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
