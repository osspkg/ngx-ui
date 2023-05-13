import { Component } from '@angular/core';
import { NavLink, NavLogo } from '../../../../../lib/src/lib/nav/nav.component';
import { ComponentBook } from '../book';

@Component({
  selector: 'app-menu-book',
  template: `
      <uxwb-menu [color]="'danger'">
        <ng-template menu-header>
          <img src="https://avatars.githubusercontent.com/u/111394190?s=60&v=4" alt="" style="margin-right: 10px">
          <h5>@UXWB</h5>
        </ng-template>
        <ng-template menu-body>
          <h1 class="m-1">Block 1</h1>
          <a href="/">
            <i class="uxwb uxwb-alert">&nbsp;</i>
            Alert Alert Alert Alert Alert Alert Alert Alert
          </a>
        </ng-template>
        <ng-template menu-body>
          <hr>
        </ng-template>
        <ng-template menu-footer>
          <span>&copy; uxwb team 2023</span>
        </ng-template>
      </uxwb-menu>
  `,
})
// eslint-disable-next-line @angular-eslint/component-class-suffix
export class MenuBook implements ComponentBook {
  link = 'Menu';
  tag = 'uxwb-menu';
  attributes = {
    color:'color scheme ( \'light\' | \'secondary\' | \'warning\' | \'danger\' | \'success\' | \'info\' | \'primary\' | \'dark\')',
    size:'size ( \'XL\' | \'L\' | \'M\' | \'S\' )',
    links:'array of links ([{ ico: css class, title: string, link: string, group:[' +
      '{ title: string, link: string, ico: css class }' +
      ']},...])',
    logo: 'logo ({ ico: link to image, title: string, link: string })',
  };

  component = MenuBook;
  example = `
<uxwb-menu [color]="'danger'">
  <ng-template menu-header>
    <img src="https://avatars.githubusercontent.com/u/111394190?s=60&v=4" alt="">
    <h5>@UXWB</h5>
  </ng-template>
  <ng-template menu-body>
    <h1 class="m-1">Block 1</h1>
    <a href="/">
      <i class="uxwb uxwb-alert">&nbsp;</i>
      Alert
    </a>
  </ng-template>
  <ng-template menu-body>
    <hr>
  </ng-template>
  <ng-template menu-footer>
    <span>&copy; uxwb team 2023</span>
  </ng-template>
</uxwb-menu>
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
