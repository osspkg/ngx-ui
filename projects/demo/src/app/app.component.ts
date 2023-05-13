import { Component } from '@angular/core';
import { ComponentBook, StyleBook } from 'projects/demo/src/app/book/book';
import { CheckBook } from './book/compnents/check';
import { InputBook } from './book/compnents/input';
import { ListBook } from './book/compnents/list';
import { MenuBook } from './book/compnents/menu';
import { NavBook } from './book/compnents/nav';
import { SelectBook } from './book/compnents/select';
import { TabsBook } from './book/compnents/tabs';
import { BlockquotesBook } from './book/styles/blockquotes';
import { BoxBook } from './book/styles/box';
import { FixGridBook } from './book/styles/fix-grid';
import { FlexGridBook } from './book/styles/flex-grid';
import { HeadingBook } from './book/styles/heading';
import { TableBook } from './book/styles/table';
import { TextAlignBook } from './book/styles/text-align';
import { TextColorBook } from './book/styles/text-color';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {

  level1 = '';

  level2 = '';

  constructor() {
    const data = decodeURIComponent(window.location.hash.substring(1)).split('|', 2);
    console.log(data);
    this.level1 = data[0] || '';
    this.level2 = data[1] || '';
  }

  setLevel(id: number, val: string): void {
    switch (id) {
      case 1:
        this.level1 = val;
        break;
      case 2:
        this.level2 = val;
        break;
    }

    window.location.hash = this.level1 + '|' + this.level2;
  }

  componentsList: ComponentBook[] = [
    new InputBook(),
    new TabsBook(),
    new ListBook(),
    new SelectBook(),
    new CheckBook(),
    new NavBook(),
    new MenuBook(),
  ];

  styleList: StyleBook[] = [
    new FlexGridBook(),
    new FixGridBook(),
    new HeadingBook(),
    new TextColorBook(),
    new TextAlignBook(),
    new BoxBook(),
    new BlockquotesBook(),
    new TableBook(),
  ];

}
