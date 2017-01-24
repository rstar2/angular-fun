import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { Observable } from "rxjs";

import * as Utils  from "../../utils/utils";


interface Coordinate {
  x: number;
  y: number;
}

@Component({
  selector: 'app-dnd',
  templateUrl: './dnd.component.html',
  styleUrls: ['./dnd.component.css']
})
export class DnDComponent implements OnInit {

  @ViewChild("btn")
  private btnClick: ElementRef;
  @ViewChild("btnMoveLeft")
  private btnLeft: ElementRef;
  @ViewChild("btnMoveRight")
  private btnRight: ElementRef;

  private position: Coordinate = {x: 100, y: 100};

  @ViewChild("ball")
  private ball: ElementRef;

  private static increment(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] + value})
  }

  private static decrement(obj, prop, value) {
    return Object.assign({}, obj, {[prop]: obj[prop] - value})
  }

  constructor() {
  }

  ngOnInit() {
    Observable.fromEvent(Utils.getNativeElement(this.btnClick), "click")
      .subscribe(console.log);

    // using a mapTo "simple value"
    const left$ = Observable.fromEvent(Utils.getNativeElement(this.btnLeft), "click")
      .mapTo(-10);
    const right$ = Observable.fromEvent(Utils.getNativeElement(this.btnRight), "click")
      .mapTo(10);
    Observable.merge(left$, right$)
      .scan((acc: Coordinate, curr) => Object.assign({}, acc, {x: acc.x + curr}), this.position)
      .subscribe(position => this.position = position);


    // using a mapTo "function"
    const leftArrow$ = Observable.fromEvent(document, 'keydown')
      .filter((event: KeyboardEvent) => event.key === 'ArrowLeft')
      .mapTo(position => DnDComponent.decrement(position, 'x', 10));
    const rightArrow$ = Observable.fromEvent(document, 'keydown')
      .filter((event: KeyboardEvent) => event.key === 'ArrowRight')
      .mapTo(position => DnDComponent.increment(position, 'x', 10));
    const upArrow$ = Observable.fromEvent(document, 'keydown')
      .filter((event: KeyboardEvent) => event.key === 'ArrowUp')
      .mapTo(position => DnDComponent.decrement(position, 'y', 10));
    const downArrow$ = Observable.fromEvent(document, 'keydown')
      .filter((event: KeyboardEvent) => event.key === 'ArrowDown')
      .mapTo(position => DnDComponent.increment(position, 'y', 10));
    Observable.merge(leftArrow$, rightArrow$, upArrow$, downArrow$)
      .scan((acc, curr) => curr(acc), this.position)
      .subscribe(position => this.position = position);


    // real DnD
    const down$ = Observable.fromEvent(Utils.getNativeElement(this.ball), 'mousedown');
    const up$ = Observable.fromEvent(Utils.getNativeElement(this.ball), 'mouseup');
    const move$ = Observable.fromEvent(document, 'mousemove');
    down$
      .switchMap((event: MouseEvent) => {
        const startX = event.offsetX, startY = event.offsetY;

        return move$
          .map((event: MouseEvent) => {
            event.preventDefault();
            return {
              x: event.clientX - startX,
              y: event.clientY - startY
            };
          }).takeUntil(up$);
      })
      .subscribe(position => this.position = position);
  }

}
