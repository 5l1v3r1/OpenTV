import { Component, OnInit } from '@angular/core';
import { News } from "app/models/news";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news: News;

  constructor() { 
    this.news = {
      title: 'Budrio, barista reagisce a rapina: ucciso con un solo colpo al petto. Caccia al killer, fuggito a piedi forse ferito',
      imageUrl: 'http://images2.gazzanet.gazzettaobjects.it/wp-content/uploads/sites/2/2017/04/gazzanet-giovanili/altri-campionati/Diretta_Primavera-630x415.jpg?v=20170401192907',
      from: 'Toro News',
      link: 'http://www.toronews.net/giovanili/live-primavera-gli-aggiornamenti-di-empoli-torino/'
    }
  }

  ngOnInit() {
  }

}
