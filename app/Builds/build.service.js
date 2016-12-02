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
//import { Hero }           from './hero';
//import { Build_definition }           from './build_definition';
var Observable_1 = require('rxjs/Observable');
var http_2 = require('@angular/http');
var BuildService = (function () {
    function BuildService(http) {
        this.http = http;
        //private heroesUrl = './app/heroes.json';  // URL to web API
        // private heroesUrl = './app/heroes.2.json';
        // private heroesUrl2 = './app/heroes.json';  // URL to web API
        //private buildUrl = 'http://web/tfs/Proyecto/Component.IO.SFTP.Conf/_apis/build/builds?api-version=2.0';
        this.buildUrl = './app/Builds/build.json';
    }
    //private heroesUrl = 'app/heroes';  // URL to web API
    BuildService.prototype.getBuilds = function (UrlParameter) {
        //this.buildUrl = UrlParameter;
        console.log('getBuilds URL');
        console.log(this.buildUrl);
        var headers = new http_2.Headers();
        return this.http.get(this.buildUrl, { withCredentials: true })
            .map(this.extractDataBuild)
            .catch(this.handleError);
    };
    BuildService.prototype.extractDataBuild = function (res) {
        var body = res.json();
        console.info(res.json());
        console.info(res.json().name);
        //return body.data || {};
        return res.json();
    };
    BuildService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable_1.Observable.throw(errMsg);
    };
    BuildService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BuildService);
    return BuildService;
}());
exports.BuildService = BuildService;
//# sourceMappingURL=build.service.js.map