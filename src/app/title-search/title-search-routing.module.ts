import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TitleSearchComponent } from './title-search.component';

const routes: Routes = [{ path: '', component: TitleSearchComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TitleSearchRoutingModule { }
