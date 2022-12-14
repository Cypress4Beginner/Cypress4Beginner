import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { GridComponent } from "./components/grid/grid.component";

import { FormComponent } from "./components/form/form.component";

import { ChartComponent } from "./components/chart/chart.component";


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'grid', component: GridComponent },
  { path: 'form', component: FormComponent },
  { path: 'chart', component: ChartComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
