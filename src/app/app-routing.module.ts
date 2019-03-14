import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SectionSalesComponent } from './sections/section-sales/section-sales.component';
import { SectionOrdersComponent } from './sections/section-orders/section-orders.component';
import { SectionHealthComponent } from './sections/section-health/section-health.component';
import { SectionPollutionComponent } from './sections/section-pollution/section-pollution.component';
import { SectionDataComponent } from './sections/section-data/section-data.component';


const routes: Routes = [
  { path: 'sales', component: SectionSalesComponent },
  { path: 'orders', component: SectionOrdersComponent },
  { path: 'health', component: SectionHealthComponent },
  { path: 'pollution', component: SectionPollutionComponent },
  { path: 'data', component: SectionDataComponent },

  { path: '', redirectTo: '/sales', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
