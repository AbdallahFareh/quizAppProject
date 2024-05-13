import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  GuardResult,
  MaybeAsync, Router,
  RouterStateSnapshot
} from '@angular/router';
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthorizationGuard{
  constructor(private authService : AuthService, private router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    if (this.authService.isAuthenticated){
      let requiredRoles = route.data['roles'];
      let userRole : string = this.authService.roles;
     // for (let role of requiredRoles){
        if (requiredRoles.includes(userRole)){
          return true;
        }
      //}
      return false;
    }else{
      this.router.navigateByUrl('/login')
      return false;
    }


  }

}
