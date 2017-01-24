import { Component, OnInit, OnDestroy, ElementRef } from '@angular/core';
import { Observable, Subscription } from "rxjs";

import * as Utils  from "../../utils/utils";

@Component({
  selector: 'app-draw',
  templateUrl: './draw.component.html',
  styleUrls: ['./draw.component.css']
})
export class DrawComponent implements OnInit, OnDestroy {

  private lines: any[] = [];
  private subscription: Subscription;

  constructor(private hostRef: ElementRef) { }

  ngOnInit() {
    const emptyLine: any = { x1: 0, y1: 0, x2: 0, y2: 0 };


    this.subscription =
      Observable.fromEvent(document, 'mousemove')
      // Observable.fromEvent(document, 'click')
      .map((event: MouseEvent) => {
        const offset = $(event.target).offset();
        return {
          x: event.clientX - offset.left,
          y: event.pageY - offset.top
        };
      }, this)
      .pairwise()
      .map(positions => {
        const p1 = positions[0];
        const p2 = positions[1];
        return { x1: p1.x, y1: p1.y, x2: p2.x, y2: p2.y };
      }, this)
      .startWith(emptyLine)
      .subscribe(line => this.lines = [...this.lines, line]);
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
