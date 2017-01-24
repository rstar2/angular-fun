import { ElementRef } from "@angular/core";

export function getNativeElement(element: ElementRef): any {
  return element.nativeElement;
}
