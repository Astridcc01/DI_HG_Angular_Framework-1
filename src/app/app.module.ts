import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { TablaComponent } from './pages/tabla/tabla.component';
import { AboutComponent } from './pages/about/about.component';
import { FrameworksComponent } from './pages/frameworks/frameworks.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaComponent,
    AboutComponent,
    FrameworksComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
