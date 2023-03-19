import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UxwbComponentsModule } from '../../../../../lib/src/lib/components.module';
import { ListBook } from './list';
import { SelectBook } from './select';
import { TabsBook } from './tabs';

@NgModule({
  declarations: [
    TabsBook,
    ListBook,
    SelectBook,
  ],
  imports: [
    CommonModule,
    UxwbComponentsModule,
  ],
})
export class ComponentsModule { }
