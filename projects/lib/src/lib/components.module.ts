import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { KeyGetterPipe, KeysFilterPipe, TmplFilterPipe } from 'projects/lib/src/lib/pipes';
import { CheckComponent } from './check/check.component';
import { DashPipe } from './core/pipes';
import { ClassDirective, TemplateOutDirective } from './directives';
import { InputComponent } from './input/input.component';
import { ListComponent, ListItemDirective } from './list/list.component';
import { SelectComponent, SelectItemDirective } from './select/select.component';
import { TabComponent, TabDirective } from './tab/tab.component';

@NgModule({
  declarations: [
    TemplateOutDirective,
    ClassDirective,
    ListComponent,
    ListItemDirective,
    InputComponent,
    TabComponent,
    TabDirective,
    DashPipe,
    SelectComponent,
    SelectItemDirective,
    KeyGetterPipe,
    KeysFilterPipe,
    TmplFilterPipe,
    CheckComponent,
  ],
  imports: [
    FormsModule,
    CommonModule,
  ],
  exports: [
    TemplateOutDirective,
    ClassDirective,
    ListComponent,
    ListItemDirective,
    InputComponent,
    TabComponent,
    TabDirective,
    SelectComponent,
    SelectItemDirective,
    KeyGetterPipe,
    KeysFilterPipe,
    TmplFilterPipe,
    CheckComponent,
  ],
})
export class UxwbComponentsModule { }
