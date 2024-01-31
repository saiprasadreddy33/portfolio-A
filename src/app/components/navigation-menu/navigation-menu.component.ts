import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavMenuItems } from '../../constants';
import { INavMenuItems } from '../../interfaces';
import { ToggleNavMenuDirective } from '../../directives/toggle-nav-menu.directive';

@Component({
  selector: 'app-navigation-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, ToggleNavMenuDirective],
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {
  navMenuItems: INavMenuItems[] = NavMenuItems;
  constructor() {}

  ngOnInit(): void {}
}
