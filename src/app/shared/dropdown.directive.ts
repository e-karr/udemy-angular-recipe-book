import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') openClass: boolean = false;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    // if (this.openClass) {
    //   this.renderer.removeClass(this.elementRef.nativeElement, 'open');
    //   this.openClass = false;
    // } else {
    //   this.renderer.addClass(this.elementRef.nativeElement, 'open');
    //   this.openClass = true;
    // }

    // this.openClass = !this.openClass;

    this.openClass = this.elementRef.nativeElement.contains(event.target) ? !this.openClass : false;
  }
}
