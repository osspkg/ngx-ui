import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UXWBUIModule } from '../../../lib/src/lib/components.module';
import { AppComponent } from './app.component';
import { Map2SlicePipe, SafeHtmlPipe } from './book/base.pipe';
import { ComponentsModule } from './book/compnents/components.module';
import { HomeComponentComponent } from './book/home-component/home-component.component';
import { ViewComponentComponent } from './book/view-component/view-component.component';
import { ViewStyleComponent } from './book/view-style/view-style.component';

@NgModule({
  declarations: [
    AppComponent,
    Map2SlicePipe,
    SafeHtmlPipe,
    ViewComponentComponent,
    ViewStyleComponent,
    HomeComponentComponent,
  ],
  imports: [
    BrowserModule,
    UXWBUIModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
