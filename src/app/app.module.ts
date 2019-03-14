import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionDataComponent } from './sections/section-data/section-data.component';
import { SectionPollutionComponent } from './sections/section-pollution/section-pollution.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    SectionSalesComponent,
    SectionHealthComponent,
    SectionOrdersComponent,
    SectionDataComponent,
    SectionPollutionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
