import { Component, OnInit, Input } from '@angular/core';
import { Title } from '../../Models/Title';
import { DetailsPageComponent } from '../details-page/details-page.component'

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: Title = new Title();
  @Input() previewLength: number = 400;

  constructor() { }

  ngOnInit(): void {
  }

  public flipIt() {
    
  }

}
