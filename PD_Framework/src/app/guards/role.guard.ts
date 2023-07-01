// import { Injectable } from '@angular/core';
// import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
// import { cuentaService } from '../modules/auth/services/services.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanActivate {
//   constructor(private authService: cuentaService, private router: Router) {}

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
//     const requiredRoles = route.data.tbl_tipo_roles.tipo_rol as string[];
//     const userRole = this.authService.login(); // Método que obtiene el rol del usuario desde tu servicio de autenticación

//     if (requiredRoles.includes(userRole)) {
//       return true; // Permite el acceso a la ruta si el rol del usuario coincide con los roles requeridos
//     } else {
//       this.router.navigate(['/inicio']); // Redirecciona a una página de acceso no autorizado si el rol del usuario no coincide
//       return false;
//     }
//   }
// }
