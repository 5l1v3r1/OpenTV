import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  @Input() slide: any;
  @Input() add: boolean;

  sanitizer: DomSanitizer;

  constructor(sanitizer: DomSanitizer) { 
    this.sanitizer = sanitizer;
  }

  ngOnInit() {

  }

  getCssImage(image_url) {
    return this.sanitizer.bypassSecurityTrustStyle("url('" + image_url + "')");
  }

}
