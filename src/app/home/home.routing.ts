import { Routes } from '@angular/router';

import { HomeComponent } from './home.component';

export const StarterRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
	data: {
      title: 'Starter Page',
      urls: [
        { title: 'Home', url: '/home' },
        { title: 'Starter Page' }
      ]
    }
  }
];
