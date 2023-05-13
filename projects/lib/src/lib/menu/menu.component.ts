import {
  AfterViewInit,
  Component,
  ContentChildren,
  Directive, ElementRef,
  Input,
  QueryList, Renderer2,
  TemplateRef, ViewChild, ViewContainerRef,
} from '@angular/core';
import { ColorsShort } from '../core/variables';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[menu-header]',
})
export class MenuHeaderDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[menu-body]',
})
export class MenuBodyDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'ng-template[menu-footer]',
})
export class MenuFooterDirective {
  constructor(public template: TemplateRef<unknown>) {
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
  selector: 'uxwb-menu',
  templateUrl: './menu.component.html',
})
export class MenuComponent implements AfterViewInit {
  @Input() color: ColorsShort = 'dark';

  @ContentChildren(MenuHeaderDirective) headerDirectives!: QueryList<MenuHeaderDirective>;
  @ContentChildren(MenuBodyDirective) bodyDirectives!: QueryList<MenuBodyDirective>;
  @ContentChildren(MenuFooterDirective) footerDirectives!: QueryList<MenuFooterDirective>;

  @ViewChild('contentHeader', { static: false }) headerRef!: ElementRef;
  @ViewChild('contentBody', { static: false }) bodyRef!: ElementRef;
  @ViewChild('contentFooter', { static: false }) footerRef!: ElementRef;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
  ) {
  }

  ngAfterViewInit() {
    this.headerDirectives.forEach((item) => {
      const embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach(value => {
        this.renderer2.appendChild(this.headerRef.nativeElement, value);
      });
    });
    this.bodyDirectives.forEach((item) => {
      const embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach(value => {
        this.renderer2.appendChild(this.bodyRef.nativeElement, value);
      });
    });
    this.footerDirectives.forEach((item) => {
      const embeddedViewRef = this.viewContainerRef.createEmbeddedView(item.template);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach(value => {
        this.renderer2.appendChild(this.footerRef.nativeElement, value);
      });
    });
  }

}
