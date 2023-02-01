import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuModule } from '@progress/kendo-angular-menu';
import { GridModule } from '@progress/kendo-angular-grid';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { PopupModule } from '@progress/kendo-angular-popup';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';

import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { InstallComponent } from "./components/install/install.component";

import { CucumberComponent } from "./components/cucumber/cucumber.component";

import { ListExampleComponent } from "./components/list/list.component";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        HomeComponent,
        InstallComponent,
        CucumberComponent,
        ListExampleComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      FormsModule,
      MenuModule,
      BrowserAnimationsModule,
      GridModule,
      ChartsModule,
      AppRoutingModule,
      DropDownsModule,
      PopupModule,
      InputsModule,
      LabelModule,
      ButtonsModule
  ],
    bootstrap: [AppComponent]
})
export class AppModule { }
