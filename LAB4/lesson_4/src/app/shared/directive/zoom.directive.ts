import { Directive, ElementRef, HostListener, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appZoom]'
})
export class ZoomDirective {

  @Input() fontsize: number = 50;
  @Input() fontsize_1: number = 70;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.fontsize + 'px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
    this.renderer.setStyle(this.elementRef.nativeElement, 'text-align', 'center');
   }

   @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.fontsize_1 + 'px');
     this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'yellow');
   }

   @HostListener('mouseleave') onMouseLeave(){
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size', this.fontsize + 'px');
    this.renderer.setStyle(this.elementRef.nativeElement, 'color', 'red');
  }

}
