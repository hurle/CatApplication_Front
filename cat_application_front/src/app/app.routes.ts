import { Routes } from '@angular/router';

export const routes: Routes = [
    // defines the path for catSearch view
    {
        path: 'cats',
        loadComponent: () => import('./features/cat-search/cat-search').then(m => m.CatSearch)
    },
    // redirect to main view
    {
        path: '**',
        loadComponent: () => import('./features/cat-search/cat-search').then(m => m.CatSearch)
    }
];
