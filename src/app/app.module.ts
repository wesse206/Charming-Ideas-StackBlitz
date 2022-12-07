import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [HomeComponent, HeaderComponent],
  bootstrap: [HeaderComponent, HomeComponent],
})
export class AppModule {}
