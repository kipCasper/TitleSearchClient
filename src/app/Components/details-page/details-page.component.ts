import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Title } from 'src/app/Models/Title';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {

  @Input() title: Title = new Title();
  @Output() backClicked = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public goBack() {
    this.backClicked.emit();
  }
}
