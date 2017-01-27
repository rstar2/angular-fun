import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from "rxjs";

@Component({
  selector: 'app-animate-ball',
  template: `<div #ball class="ball"></div>`
})
export class AnimateBallComponent implements OnInit {

  @ViewChild('ball')
  private ball;

  constructor() { }

  ngOnInit() {
    let BALL_OFFSET = 0;
    let CURSOR_OFFSET = 0;

    const click$ = Observable.fromEvent(document, 'click')
      .map((event: any) => {
        const offset = $(event.target).offset();
        return {
          x: event.pageX  - BALL_OFFSET - CURSOR_OFFSET,
          y: event.pageY  - BALL_OFFSET - CURSOR_OFFSET
        };
      }).share();

    const click1$ = click$.do(()=> console.log("click 1"))
      .subscribe(props =>
        TweenMax.to(this.ball.nativeElement, 1, props));

    const click2$ = click$.do(()=> console.log("click 2"))
      .subscribe(props =>
        TweenMax.to(this.ball.nativeElement, 1, props));
  }

}
