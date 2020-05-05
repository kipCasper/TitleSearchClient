import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared.module';

import { TitleSearchRoutingModule } from './title-search-routing.module';

import { TitleComponent } from './Components/title/title.component';
import { DetailsPageComponent } from './Components/details-page/details-page.component';
import { TitleSearchComponent } from './title-search.component';
import { TitleService } from './Services/title.service';

@NgModule({
  declarations: [
    TitleComponent,
    DetailsPageComponent,
    TitleSearchComponent
  ],
  imports: [
    CommonModule,
    TitleSearchRoutingModule,
    SharedModule
  ],
  providers: [TitleService]
})
export class TitleSearchModule { }
