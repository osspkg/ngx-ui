import { Component } from '@angular/core';
import { NavLink, NavLogo } from '../../../../../lib/src/lib/nav/nav.component';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-nav-book',
  template: `
      <uxwb-nav [links]="urls1" [logo]="logo" [size]="'XL'"></uxwb-nav>
      <uxwb-nav [links]="urls2" [logo]="logo" [color]="'warning'" [size]="'L'"></uxwb-nav>
      <uxwb-nav [links]="urls2" [logo]="logo" [color]="'info'" [size]="'M'"></uxwb-nav>
      <uxwb-nav [links]="urls2" [logo]="logo" [color]="'danger'" [size]="'S'"></uxwb-nav>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class NavBook implements ComponentBook {
  link = 'Nav';
  tag = 'uxwb-menu';
  attributes = {
    color:'color scheme ( \'light\' | \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
    size:'size ( \'XL\' | \'L\' | \'M\' | \'S\' )',
    links:'array of links ([{ ico: css class, title: string, link: string, group:[' +
      '{ title: string, link: string, ico: css class }' +
      ']},...])',
    logo: 'logo ({ ico: link to image, title: string, link: string })',
  };

  component = NavBook;
  example = `
<uxwb-nav
    [links]="[{ link:'/', title:'Home', ico:'uxwb uxwb-home' },
        { title:'Settings', ico:'uxwb uxwb-settings', group:[
        { link:'/users', title:'Users', ico:'uxwb uxwb-people' }
        ] }]"
    [logo]="{ ico:'https://avatars.githubusercontent.com/u/111394190?s=200&v=4',
          title:'@UXWB', link:'/' }"
    [color]="'dark'"
    [size]="'XL'"
></uxwb-nav>
  `;

  demo = [
    {},
  ];

  urls1: NavLink[] = [
    { link:'/', title:'Menu 1', ico:'uxwb uxwb-home' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 2' },
    { link:'/', title:'Menu 3' },
    { ico:'uxwb uxwb-people', title:'Menu 4', link:'/', group:[
      { title:'Sub Menu 1', link:'/sub', ico:'uxwb uxwb-people' },
      { title:'Sub Menu 2', link:'/sub' },
      { title:'Sub Menu 3', link:'/sub' },
      { title:'Sub Menu 4', link:'/sub' },
      { title:'Sub Menu 5', link:'/sub' },
      { title:'Sub Menu 5', link:'/sub' },
      { title:'Sub Menu 6', link:'/sub' },
      { title:'Sub Menu 7', link:'/sub' },
      { title:'Sub Menu 8', link:'/sub' },
      { title:'Sub Menu 9', link:'/sub' },
      { title:'Sub Menu 10', link:'/sub' },
      { title:'Sub Menu 11', link:'/sub' },
    ] },
  ];

  urls2: NavLink[] = [
    { link:'/', title:'Menu 1' },
    { link:'/', title:'Menu 2' },
    { title:'Menu 4', group:[
      { title:'Sub Menu 1', link:'/sub' },
      { title:'Sub Menu 2', link:'/sub' },
      { title:'Sub Menu 3', link:'/sub' },
      { title:'Sub Menu 4', link:'/sub' },
      { title:'Sub Menu 5', link:'/sub' },
      { title:'Sub Menu 5', link:'/sub' },
      { title:'Sub Menu 6', link:'/sub' },
      { title:'Sub Menu 7', link:'/sub' },
      { title:'Sub Menu 8', link:'/sub' },
      { title:'Sub Menu 9', link:'/sub' },
      { title:'Sub Menu 10', link:'/sub' },
      { title:'Sub Menu 11', link:'/sub' },
    ] },
  ];

  logo: NavLogo = { ico:'https://avatars.githubusercontent.com/u/111394190?s=200&v=4', title:'@UXWB', link:'/' };

}
