import { Component, Input } from '@angular/core';
import { ColorsShort } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class NavLink {
  ico?: string;
  title!: string;
  link?: string;
  group?: NavSubLink[];
}

export class NavSubLink {
  ico?: string;
  title!: string;
  link!: string;
}

export class NavLogo {
  ico!: string;
  title!: string;
  link!: string;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type Size = 'XL' | 'L' | 'M' | 'S';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-nav',
  templateUrl: './nav.component.html',
})
export class NavComponent {
  @Input() color: ColorsShort = 'dark';
  @Input() logo?: NavLogo;
  @Input() size: Size = 'L';
  @Input() links: NavLink[] = [];
}
