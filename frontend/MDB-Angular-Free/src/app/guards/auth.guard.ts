import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GymService } from '../services/gym.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private gymService: GymService, private router: Router) { }

  canActivate(): boolean {
    if (this.gymService.isAnybody()) {
      return true;
    } else {
      this.router.navigate(['']);
      return false;
    }
  }

}


