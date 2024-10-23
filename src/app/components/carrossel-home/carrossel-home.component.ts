import { Component, OnInit, OnDestroy } from '@angular/core';
import { Slide1Component } from '../slide1/slide1.component';
import { Slide2Component } from '../slide2/slide2.component';
import { Slide3Component } from '../slide3/slide3.component';

@Component({
  selector: 'app-carrossel-home',
  templateUrl: './carrossel-home.component.html',
  styleUrls: ['./carrossel-home.component.scss']
})
export class CarrosselHomeComponent implements OnInit, OnDestroy {
  currentIndex: number = 0;
  interval: any;

  slides = [Slide1Component, Slide2Component, Slide3Component];

  ngOnInit() {
    this.startCarousel();
  }

  ngOnDestroy() {
    this.stopCarousel();
  }

  startCarousel() {
    this.interval = setInterval(() => {
      this.nextSlide();
    }, 4000);
  }

  stopCarousel() {
    clearInterval(this.interval);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  setSlide(index: number) {
    this.currentIndex = index;
    this.stopCarousel();
    this.startCarousel();
  }
}
