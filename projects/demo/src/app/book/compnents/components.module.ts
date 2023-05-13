import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UXWBUIModule } from '../../../../../lib/src/lib/components.module';
import { CheckBook } from './check';
import { InputBook } from './input';
import { ListBook } from './list';
import { MenuBook } from './menu';
import { NavBook } from './nav';
import { SelectBook } from './select';
import { TabsBook } from './tabs';

@NgModule({
  declarations: [
    TabsBook,
    ListBook,
    SelectBook,
    NavBook,
    MenuBook,
    CheckBook,
    InputBook,
  ],
  imports: [
    CommonModule,
    UXWBUIModule,
  ],
})
export class ComponentsModule { }
