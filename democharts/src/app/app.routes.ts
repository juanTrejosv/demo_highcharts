import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: 'map',
    component: MapComponent
  },
  {
    path: '',
    children: [
      { path: "", loadChildren: () => import('./charts/charts.module').then(m => m.ChartsModule) }
    ]
  }
];
