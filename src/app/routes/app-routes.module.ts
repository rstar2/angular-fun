import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes as appRoutes } from './app-routes';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutesModule {
}
