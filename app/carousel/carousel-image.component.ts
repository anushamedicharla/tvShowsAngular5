import { Carousel } from './carousel';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'tv-carousel-image',
    template: `
            <img src="{{slide.image}}" alt="{{slide.title}}">
            <div class="carousel-caption">
                <h2> {{slide.title}} </h2>
            </div>
    `
})

export class CarouselImageComponent implements OnInit {
    @Input() slide: Carousel;
    constructor() { }

    ngOnInit() { }
}