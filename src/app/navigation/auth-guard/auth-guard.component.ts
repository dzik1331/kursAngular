import {Component, OnInit} from '@angular/core';
import {PageService} from '../../page/page.service';
import {ActivatedRoute} from '@angular/router';
import {TitleClass} from '../../title.class';
import {AuthServiceService} from '../../auth-service.service';

@Component({
  selector: 'app-auth-guard',
  templateUrl: './auth-guard.component.html',
  styleUrls: ['./auth-guard.component.scss']
})
export class AuthGuardComponent extends TitleClass implements OnInit {
  tsP1 = `
  //serwis
  export class AuthGuardService implements CanActivate, CanLoad {

    constructor(private authService: AuthServiceService) {
    }
    // Blokuje dostęp do ścieżki ale moduł zawierajacy komponent i tak jest pobierany co można zaobserwować wciskając f12
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authService.isAdministrator;
    }
    // Blokuje dostęp do ścieżki oraz nie ładuje modułu
    canLoad(route: Route, segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.isAdministrator;
    }
  }
  `;
  tsP2 = `
  //routing
  ...
  {
    path: 'hlAndHb',
    loadChildren: './host-listener-binding/host-listener-binding.module#HostListenerBindingModule',
    canActivate: [AuthGuardService]
  }
  ...
`;

  constructor(pageService: PageService, route: ActivatedRoute, public authService: AuthServiceService) {
    super(pageService, route);
  }

  ngOnInit() {
    super.ngOnInit();
  }

}
