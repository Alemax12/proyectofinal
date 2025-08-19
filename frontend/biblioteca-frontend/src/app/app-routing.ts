// src/app/app-routing.ts
import { Routes } from '@angular/router';
import { LibrosComponent } from './components/libros/libros';
import { PerfilComponent } from './components/perfil/perfil';
import { LoginComponent } from './components/login/login';
import { AuthGuard } from './guards/auth-guard';

export const appRoutes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'libros',
    component: LibrosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'perfil',
    component: PerfilComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    redirectTo: 'libros',
    pathMatch: 'full' // ✅ Debe ser 'full' o 'prefix'
  },
  {
    path: '**', // ruta comodín para 404
    redirectTo: 'libros',
    pathMatch: 'full'
  }
];
