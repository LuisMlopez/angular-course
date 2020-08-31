import {Component, OnInit, Output, EventEmitter, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {
  collapsed = true;
  currentPage = 'recipes';
  @Output() onChangeTabEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.onChangeTabEvent.emit(this.currentPage);
  }

  onChangeTab(tab: string): void {
    this.currentPage = tab;
    this.onChangeTabEvent.emit(this.currentPage);
  }

}
