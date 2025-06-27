import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingArenaComponent } from './landing-arena/landing-arena.component';
import { Compo1Component } from './compo1/compo1.component';
import { Compo2Component } from './compo2/compo2.component';

const routes: Routes = [
  { component: LandingArenaComponent, path: 'landing',
    children: [
      {
        component: Compo1Component, path: 'compo1'
      },
      {
        component: Compo2Component, path: 'compo2'
      }
    ]
   },
    { path: '**', redirectTo: 'landing' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
