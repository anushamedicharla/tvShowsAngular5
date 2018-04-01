import { Carousel } from './carousel';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/observable';

@Injectable()
export class CarouselService {
    private carouselUrl: string = 'api/carousel_items.json';
    constructor(private _http: Http) {}

    featured(): Observable<Carousel[]> {
       return this._http
            .get(this.carouselUrl)
            .map((response: Response) => <Carousel[]> response.json())
            .do(data => console.log(data))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        let message = `Error Status Code ${error.status} status ${error.statusText} at ${error.url}`;
        return Observable.throw(message);
    }
}