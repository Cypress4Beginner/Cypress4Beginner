import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { InstallComponent } from "./components/install/install.component";

import { CucumberComponent } from "./components/cucumber/cucumber.component";

import { ListExampleComponent } from "./components/list/list.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'install' , component: InstallComponent },
  { path: 'cucumber', component: CucumberComponent },
  { path: 'list_example', component: ListExampleComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
