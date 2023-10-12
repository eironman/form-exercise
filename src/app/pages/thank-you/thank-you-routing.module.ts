import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {ThankYouComponent} from "./thank-you.component";

const routes: Routes = [
  { path: '', component: ThankYouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThankYouRoutingModule { }
