import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
  RouterModule
} from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { LangDropdownComponent } from './components/lang-dropdown/lang-dropdown.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    RouterModule,
    FooterComponent,
    NavigationMenuComponent,
    LangDropdownComponent,
    SpinnerComponent,
    CommonModule
  ]
})
export class AppComponent implements OnInit {
  loading = true;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      this.navigationInterceptor(event as RouterEvent);
    });
  }

  navigationInterceptor(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    }
    if (event instanceof NavigationEnd) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }
    if (event instanceof NavigationError) {
      setTimeout(() => {
        // here
        this.loading = false;
      }, 2000);
    }
  }
}
