import { Component, OnInit, OnDestroy } from '@angular/core';
import { TitleService } from './Services/title.service';
import { Title } from './Models/Title';
import { Subject, generate } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

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
  private searchChanged: Subject<string> = new Subject<string>();
  
  constructor(private titleService: TitleService) { }

  public ngOnInit() {
    this.titleSubscription = this.titleService.getTitles().subscribe(titles => {
      this.titles = titles;
      this.fTitles = titles;
    });

    this.searchChanged.pipe(
      debounceTime(500)
    ).subscribe(() => {
      this.search();
    });
  }

  public ngOnDestroy() {
    this.titleSubscription.unSubscribe();
  }

  public search() {
    if (this.selected === 'title') {
      this.fTitles = this.titles.filter(title => title.titleName.toUpperCase().includes(this.searchInput.toUpperCase()));
    } else if (this.selected === 'genre') {
      this.fTitles = this.titles.filter(title => {
        return title.genres.some(genre => genre.toUpperCase().includes(this.searchInput.toUpperCase())) === true
        });
    } else if (this.selected === 'cast') {
      this.fTitles = this.titles.filter(title => {
        return title.participants.some(part => part.name.toUpperCase().includes(this.searchInput.toUpperCase())) === true
      });
    }
  }

  public inputChanged() {
    this.searchChanged.next(this.searchInput);
  }

  public showDetails(title: Title) {
    this.displayDetails = true;
    this.displayTitle = title;
  }

  public showIndex() {
    this.displayDetails = false;
    this.searchInput = '';
    this.fTitles = this.titles;
  }
}
