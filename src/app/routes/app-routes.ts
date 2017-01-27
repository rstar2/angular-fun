import { Routes } from '@angular/router';

import { HomeComponent } from "../components/home/home.component";
import { DnDComponent } from "../components/dnd/dnd.component";
import { DrawComponent } from "../components/draw/draw.component";
import { PageNotFoundComponent } from "../components/page-not-found/page-not-found.component";
import { AnimateBallComponent } from "../components/tweenmax/animate-ball.component";

// NOTE - dont use "export default" and so just "normally" export the routes, because
// default exports are not supported by the Angular compiler at the moment.
// (there's "ERROR in Cannot read property 'loadChildren' of null")

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dnd',
    component: DnDComponent
  },
  {
    path: 'draw',
    component: DrawComponent
  },{
    path: 'animate-ball',
    component: AnimateBallComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
