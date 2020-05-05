import { Component, OnInit, HostListener } from '@angular/core';
import { TitleService } from './Services/title.service';
import { Title } from './Models/Title';
import { Subject, generate } from 'rxjs';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-title-search',
  templateUrl: './title-search.component.html',
  styleUrls: ['./title-search.component.scss'],
  providers: []
})
export class TitleSearchComponent implements OnInit {

  public titleSubscription: any; 
  public searchInput = '';
  public selected = 'title';
  public displayDetails = false;
  public displayTitle = new Title();
  public columnNumber = 3;
  public previewLength = 300;
  
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

    this.changeColumnNumber(window.innerWidth);
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

  public changeColumnNumber(width: number) {    
    const columns = Math.floor(width/250);
    this.columnNumber = columns > 4 ? 4 : columns;
    this.previewLength = 400 / this.columnNumber;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.changeColumnNumber(window.innerWidth);
  }
}
