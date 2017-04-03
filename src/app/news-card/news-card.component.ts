import { Component, OnInit, Input } from '@angular/core';
import { News } from "app/models/news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  @Input() news: News;

  constructor() { }

  ngOnInit() {
  }

}
