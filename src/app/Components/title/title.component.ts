import { Component, OnInit, Input } from '@angular/core';
import { Title } from 'src/app/Models/Title';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() title: Title = new Title();

  constructor() { }

  ngOnInit(): void {
  }

  public flipIt() {
    
  }

}
