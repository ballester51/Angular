import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Hero }           from './hero';
//import { Build_definition }           from './build_definition';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class HeroService {
    constructor(private http: Http) { }
   //private heroesUrl = './app/heroes.json';  // URL to web API
   private heroesUrl = './app/heroes.2.json';
    private heroesUrl2 = './app/heroes.json';  // URL to web API
  //  private heroesUrl = 'http://web/tfs/Proyecto/Component.Integration/_apis/build/definitions/894?api-version=2.0';
//private heroesUrl = 'app/heroes';  // URL to web API

    getHeroes(): Observable<Object> {

                let headers = new Headers();

                return this.http.get(this.heroesUrl,{withCredentials :true})
                                .map(this.extractDataBuild)
                                .catch(this.handleError);
    }


    getHeroes_old(): Observable<Hero[]> {

                let headers = new Headers();

                return this.http.get(this.heroesUrl2,{withCredentials :true})
                                .map(this.extractData)
                                .catch(this.handleError);
    }

    private extractDataBuild(res: Response) {
        let body = res.json();
        console.info ("extractDataBuild_hero_service");
        console.info (res.json());
        console.info (res.json().name);
        //return body.data || {};
        return res.json();
    }

    private extractData(res: Response) {
        let body = res.json();
        console.info ("extractData_hero_service");
        console.info (res.json());
        return body.data || {};
        
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

     addHero (name: string): Observable<Hero> {
    let body = JSON.stringify({ name });
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.heroesUrl, body, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }
}