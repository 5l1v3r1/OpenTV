import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';

const router = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, useAsDefault: true},
    { path: 'news', component: NewsComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router, { useHash: true });