import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

// Decorator
@Directive({
  selector: '[appColorizer]'
})
export class ColorizerDirective{

  // 1. Find the el that is using appColorizer directive -- using ElementRef 
  
  constructor(private elRef: ElementRef, private renderer: Renderer2) {  // Dependency Injection
    console.log('Inside ColorizerDirective Constructor');

    console.log(this.elRef.nativeElement); // this is the element 

    // 2. change the bg color, text color of the element using JS -- Not Recommended
    // this.elRef.nativeElement.style.backgroundColor = 'red';
    // this.elRef.nativeElement.style.color = 'white';
    // this.elRef.nativeElement.style.height = '300px';

    // 2. change the bg color, text color of the element using Angular's Renderer2 Class -- Recommended
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'white');
    this.renderer.setStyle(this.elRef.nativeElement, 'height', '300px');
  }

  // Handling Events in Directives using HostListener
  @HostListener('click', ['$event'])
  handleClick(event: any){
    console.log('Clicked');
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'yellow');
    this.renderer.setStyle(event.target, 'color', 'black');
  }

  @HostListener('mouseover', ['$event'])
  handleMouseover(event: any){
    console.log('Mouseover');
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'lightgreen');
    this.renderer.setStyle(event.target, 'color', 'black');
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseleave(event: any){
    console.log('Mouseleave');
    console.log(event.target);
    this.renderer.setStyle(event.target, 'background-color', 'red');
    this.renderer.setStyle(event.target, 'color', 'white');
  }

  // TODO: Explore @HostBinding()

}
