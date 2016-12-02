import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
//import { Hero }           from './hero';
//import { Build_definition }           from './build_definition';
import { Observable }     from 'rxjs/Observable';
import { Headers, RequestOptions } from '@angular/http';


@Injectable()
export class TemProjectService {
    constructor(private http: Http) { }
   //private heroesUrl = './app/heroes.json';  // URL to web API
  // private heroesUrl = './app/heroes.2.json';
   // private heroesUrl2 = './app/heroes.json';  // URL to web API
  // private teamProjectUrl = 'http://web/tfs/Proyecto/_apis/projects?api-version=2.0';
   private teamProjectUrl = './app/TeamProject/teamProject.json';
//private heroesUrl = 'app/heroes';  // URL to web API

    getTeamProjects(): Observable<Object> {

                let headers = new Headers();

                return this.http.get(this.teamProjectUrl,{withCredentials :true})
                                .map(this.extractDataTeamProject)
                                .catch(this.handleError);
    }



    private extractDataTeamProject(res: Response) {
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