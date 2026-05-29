import { Routes } from '@angular/router';
import { CatSearch } from './features/cat-search/cat-search';

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
