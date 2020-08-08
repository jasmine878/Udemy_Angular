import { Directive, Renderer2, OnInit, ElementRef, HostListener, Host } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{


  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {}

  @HostListener('mouseenter') mouseover(eventData: Event) {
    this.renderer.setStyle(this.elementRef.nativeElement, "background-color", 'blue');
    this.renderer.setStyle(this.elementRef.nativeElement, "color", 'white');
   }

   @HostListener('mouseleave') mouseleave(eventData: Event) {
     this.renderer.setStyle(this.elementRef.nativeElement, "background-color", 'transparent');
     this.renderer.setStyle(this.elementRef.nativeElement, "color", "black");
   }
}
