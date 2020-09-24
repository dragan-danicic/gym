import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { GymService } from '../services/gym.service';

@Injectable({
  providedIn: 'root'
})
export class RoleAuthGuard implements CanActivate {

  constructor(private service: GymService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole;

    const role = this.service.getRole();

    if (role == expectedRole) {
      return true;
    }else{
      this.router.navigate(['']);
      return false;
    }
    
  }

}


