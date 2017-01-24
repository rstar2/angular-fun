import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';

import { HomeComponent } from "./home/home.component";
import { DnDComponent } from "./dnd/dnd.component";
import { DrawComponent } from "./draw/draw.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { LineComponent } from './draw/line.component';


const COMPONENTS = [
  HomeComponent,
  DnDComponent,
  DrawComponent,
  LineComponent,
  PageNotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: COMPONENTS,
  // exports: COMPONENTS
})
export class AppComponentsModule {
}
