import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

// TODO Rumen - make it a a Directive so that not so many middle components are created

@Component({
  // Avoiding Element Selectors For Components
  // Adding new elements like <app-line> is perfectly fine in HTML – browser have a
  // specific way of interpreting unknown elements. But in SVG it's not OK.
  // That's is because SVG is not HTML. It's XML. And if we throw unknown elements in it,
  // browsers won't know what to do with them. That means this code example is not going to render.
  // So we have to use it as <xxxx app-line ... />
  selector: '[app-line]',
  encapsulation: ViewEncapsulation.None,

  // Using Attribute Binding Instead of Property Binding
  // in SVG we cannot use [x1]="line.x1" but we have to use [attr.x1]="line.x1",
  // because in SVG while there is a x1 attribute on <line>,
  // there is no corresponding x1 property on the DOM SVGLineElement object
  // Same is true for all SVG elements
  template: `
       <svg:line [attr.x1]="line.x1" [attr.y1]="line.y1"
      [attr.x2]="line.x2" [attr.y2]="line.y2"
      style="stroke:rgb(255,0,0);stroke-width:2"></svg:line>
  `,
  styles: [`
      line {
         pointer-events: none;
      }
  `]
})
export class LineComponent implements OnInit {

  @Input() line: any;

  constructor() {
  }

  ngOnInit() {
  }

}
