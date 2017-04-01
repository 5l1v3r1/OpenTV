import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  temp_covers: any;
  covers: any;

  currentIndex = 0;

  constructor() { 
    this.covers = [];

    this.temp_covers = [
      {
        image: 'https://images.everyeye.it/img-notizie/the-flash-3-grant-gustin-spiega-conseguenze-flashpoint-barry-v3-268224-1280x720.jpg',
        title: 'The Flash 3x12',
        channel: 'Serie TV'
      },
      {
        image: 'http://static.televisionando.it/r/845X0/www.televisionando.it/img/lo-scherzo-perfetto-teo-mammucari.png',
        title: '#LOSCHERZOPERFETTO',
        channel: 'Show televisivo'
      },
      {
        image: 'http://o.aolcdn.com/dims-shared/dims3/GLOB/crop/3500x1751+0+0/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F528683a89ede1499981f2bf522f977b5%2F204664384%2FRTSTFA3.jpeg',
        title: 'Primarie Cinque Stelle di Genova, indagati per diffamazione Grillo e Di Battista',
        channel: 'News'
      },
      {
        image: 'http://supereroi-news.com/wp-content/uploads/2016/09/spiderman1.jpg',
        title: 'SpiderMan: HomeComing',
        channel: 'Film'
      }
    ];
  }

  updateCovers() {
    this.covers.push(this.temp_covers[this.currentIndex++]);
  }

  ngOnInit() {
    
  }

}
