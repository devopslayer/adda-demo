import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FacilitiesComponent } from './components/facilities/facilities.component';
import { HistoriesComponent } from './components/histories/histories.component';

const routes: Routes = [
  {path: 'facilities', component: FacilitiesComponent},
  {path: 'histories', component: HistoriesComponent},
  {path: ' ', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [FacilitiesComponent, HistoriesComponent];