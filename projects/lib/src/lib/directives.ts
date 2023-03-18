import {
  Directive,
  ElementRef,
  Input, OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

@Directive({
  selector: '[uxwbClass]',
})
export class ClassDirective implements OnInit {

  @Input('uxwbClass') value = '';

  @Input('uxwbClassList') list: string[] = [];

  constructor(
    private ref: ElementRef,
    private render: Renderer2,
  ) {}

  ngOnInit() {
    const index = this.calc(this.value, this.list.length);
    const cls = this.list[index] || this.list[index - 1] || this.list[0];
    this.render.addClass(this.ref.nativeElement, cls);
  }

  private calc(value: string, len: number): number {
    let out = 0;
    value.split('').forEach(value1 => {
      out += value1.charCodeAt(0);
    });
    return out & len;
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[tmpl-out]',
})
export class TemplateOutDirective implements OnChanges {
  @Input('tmpl-out') template!: TemplateRef<unknown>;

  constructor(
    private renderer2: Renderer2,
    private viewContainerRef: ViewContainerRef,
    public elementRef: ElementRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['template']?.isFirstChange() === false) {
      (this.elementRef.nativeElement as HTMLElement).childNodes.forEach(value => {
        this.renderer2.removeChild(this.elementRef.nativeElement, value);
      });
    }
    
    const link = this.viewContainerRef.createEmbeddedView(this.template);
    link.detectChanges();
    link.rootNodes.forEach((value) => {
      this.renderer2.appendChild(this.elementRef.nativeElement, value);
    });
  }

}
