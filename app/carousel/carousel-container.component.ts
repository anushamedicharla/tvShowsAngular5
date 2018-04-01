import { CarouselService } from './carousel.service';
import { Carousel } from './carousel';
import { Component, OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'tv-carousel-container',
    templateUrl: 'carousel-container.template.html'
})

export class CarouselContainerComponent implements OnInit {
    slides: Carousel[];
    errorMsg: string;

    constructor(private _carouselService: CarouselService){}
    ngOnInit() {
        this.getSlides();
    }

    getSlides(){
        this._carouselService.featured()
            .subscribe(
                slides => this.slides = slides,
                error => this.errorMsg = <any>error
            )
    }
}