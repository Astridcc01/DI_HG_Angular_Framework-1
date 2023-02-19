import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormularioComponent} from './pages/formulario/formulario.component';
import {HomeComponent} from './pages/home/home.component';
import {TablaComponent} from './pages/tabla/tabla.component';
import {AboutComponent} from './pages/about/about.component';
import {FrameworksComponent} from './pages/frameworks/frameworks.component';


const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', component: HomeComponent },
  { path: 'tabla', component: TablaComponent },
  { path: 'about', component: AboutComponent },
  { path: 'frameworks', component: FrameworksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
