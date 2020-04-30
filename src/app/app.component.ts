import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from './Services/title.service';
import { Title } from './Models/Title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public titleSubscription: any; 
  public searchInput = '';
  public selected = 'title';
  public displayDetails = false;
  public displayTitle = new Title();
  
  public fTitles: Array<Title>;
  private titles: Array<Title>;
  
  constructor(private titleService: TitleService) { }

  public ngOnInit() {
    this.titleSubscription = this.titleService.getTitles().subscribe(titles => {
      this.titles = titles;
      this.fTitles = titles;

      console.log(titles);
    });
  }

  public ngOnDestroy() {
    this.titleSubscription.unSubscribe();
  }

  public search() {
    this.fTitles = this.titles.filter(title => title.titleName.toUpperCase().indexOf(this.searchInput.toUpperCase()) > -1);
  }

  public showDetails(title: Title) {
    this.displayDetails = true;
    this.displayTitle = title;
  }

  public showIndex() {
    this.displayDetails = false;
  }
}
