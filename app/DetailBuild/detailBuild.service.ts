import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Hero }           from './hero';
//import { Build_definition }           from './build_definition';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class DetailBuildService {
    constructor(private http: Http) { }
   //private heroesUrl = './app/heroes.json';  // URL to web API
  // private heroesUrl = './app/heroes.2.json';
   // private heroesUrl2 = './app/heroes.json';  // URL to web API
   //private buildUrl = 'http://web/tfs/Proyecto/Component.IO.SFTP.Conf/_apis/build/builds?api-version=2.0';
   private detailBuildUrl = './app/DetailBuild/detailbuild.json';
//private heroesUrl = 'app/heroes';  // URL to web API

    getDetailBuilds(UrlParameter:string): Observable<Object> {
//this.detailBuildUrl = UrlParameter;
console.log('getDetailBuilds URL');
console.log(this.detailBuildUrl);
                let headers = new Headers();

                return this.http.get(this.detailBuildUrl,{withCredentials :true})
                                .map(this.extractDataDetailBuild)
                                .catch(this.handleError);
    }



    private extractDataDetailBuild(res: Response) {
        let body = res.json();
        console.info (res.json());
        console.info (res.json().name);
        //return body.data || {};
        return res.json();
    }

   

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

}