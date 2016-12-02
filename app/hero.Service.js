"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//import { Build_definition }           from './build_definition';
var Observable_1 = require('rxjs/Observable');
var http_2 = require('@angular/http');
var HeroService = (function () {
    function HeroService(http) {
        this.http = http;
        //private heroesUrl = './app/heroes.json';  // URL to web API
        this.heroesUrl = './app/heroes.2.json';
        this.heroesUrl2 = './app/heroes.json'; // URL to web API
    }
    //  private heroesUrl = 'http://web/tfs/Proyecto/Component.Integration/_apis/build/definitions/894?api-version=2.0';
    //private heroesUrl = 'app/heroes';  // URL to web API
    HeroService.prototype.getHeroes = function () {
        var headers = new http_2.Headers();
        return this.http.get(this.heroesUrl, { withCredentials: true })
            .map(this.extractDataBuild)
            .catch(this.handleError);
    };
    HeroService.prototype.getHeroes_old = function () {
        var headers = new http_2.Headers();
        return this.http.get(this.heroesUrl2, { withCredentials: true })
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService.prototype.extractDataBuild = function (res) {
        var body = res.json();
        console.info("extractDataBuild_hero_service");
        console.info(res.json());
        console.info(res.json().name);
        //return body.data || {};
        return res.json();
    };
    HeroService.prototype.extractData = function (res) {
        var body = res.json();
        console.info("extractData_hero_service");
        console.info(res.json());
        return body.data || {};
    };
    HeroService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    HeroService.prototype.addHero = function (name) {
        var body = JSON.stringify({ name: name });
        var headers = new http_2.Headers({ 'Content-Type': 'application/json' });
        var options = new http_2.RequestOptions({ headers: headers });
        return this.http.post(this.heroesUrl, body, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    HeroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map