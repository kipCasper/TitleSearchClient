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

  public storyLimit = 1;
  public showStoryText = 'show all';

  public awardLimit = 5;
  public showAwardText = 'show all';
  public castLimit = 10;
  public showCastText = 'show all';

  constructor() { }

  ngOnInit(): void {
  }

  public goBack() {
    this.backClicked.emit();
  }

  public showStories() {
    if (this.showStoryText === 'show all') {
      this.storyLimit = this.title.storylines.length;
      this.showStoryText = 'show less'
    } else {
      this.storyLimit = 1;
      this.showStoryText = 'show all';
    }
  }

  showCast() {
    if (this.showCastText === 'show all') {
      this.castLimit = this.title.participants.length;
      this.showCastText = 'show less';
    } else {
      this.castLimit = 10;
      this.showCastText = 'show all';
    }
  }

  showAwards() {
    if (this.showAwardText === 'show all') {
      this.awardLimit = this.title.awards.length;
      this.showAwardText = 'show less';
    } else {
      this.awardLimit = 5;
      this.showAwardText = 'show all';
    }
  }
}
