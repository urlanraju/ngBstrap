import { Routes } from '@angular/router';
import { DashboardAuthGuard } from './auth/dashboard-auth-guard.service';

export const routes: Routes = [
    // Default route (optional)
    { path: '', redirectTo: '/auth', pathMatch: 'full' },

    // Lazy-load the AuthModule
    {
        path: 'auth', // This is the base path for all routes defined in AuthRoutingModule
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
    },
    {
        path: 'dashboard', // This is the base path for all routes defined in DashboardRoutingModule
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [DashboardAuthGuard]
    },
    // Catch-all for unknown routes (optional)
    { path: '**', redirectTo: 'auth' }
];
