import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CheckComponent } from './check/check.component';
import { DashPipe } from './core/pipes';
import { ClassDirective, TemplateOutDirective } from './directives';
import { InputComponent } from './input/input.component';
import { ListComponent, ListItemDirective } from './list/list.component';
import { MenuBodyDirective, MenuComponent, MenuFooterDirective, MenuHeaderDirective } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { KeyGetterPipe, KeysFilterPipe, TmplFilterPipe } from './pipes';
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
    NavComponent,
    MenuHeaderDirective,
    MenuBodyDirective,
    MenuFooterDirective,
    MenuComponent,
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
    NavComponent,
    MenuHeaderDirective,
    MenuBodyDirective,
    MenuFooterDirective,
    MenuComponent,
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
})
export class UXWBUIModule { }
