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
//import { Hero }              from '../hero';
//import { Build_definition}   from '../build_definition';
//import { HeroService }       from '../hero.service';
var build_service_1 = require('./build.service');
var BuildListComponent = (function () {
    function BuildListComponent(buildService) {
        this.buildService = buildService;
        this.mode = 'Observable';
    }
    BuildListComponent.prototype.ngOnChanges = function () {
        if (typeof this.TeamProject !== 'undefined') {
            // the variable is defined
            this.UrlListBuild = "http://web/tfs/Proyecto/" + this.TeamProject.name + "/_apis/build/builds?api-version=2.0";
            console.log('URL dir');
            console.log(this.UrlListBuild);
            this.getBuilds();
        }
        // console.log (TeamProject);
        // if (null == TeamProject){
        //           this.UrlListBuild="http://web/tfs/Proyecto/" + TeamProject.name + "/_apis/build/builds?api-version=2.0"
        //         console.log("URL dir");
        //         console.log(this.UrlListBuild);
        // }
    };
    BuildListComponent.prototype.getBuilds = function () {
        var _this = this;
        this.buildService.getBuilds(this.UrlListBuild)
            .subscribe(function (builds) { return _this.builds = builds; }, function (error) { return _this.errorMessage = error; });
    };
    BuildListComponent.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.selectedBuildObj = newObj;
        this.BuildName = newObj;
        console.log(this.BuildName);
        0;
        // to do  call the other api with the name
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], BuildListComponent.prototype, "TeamProject", void 0);
    BuildListComponent = __decorate([
        core_1.Component({
            selector: 'build-list',
            templateUrl: 'app/Builds/build-list.component.html',
            providers: [build_service_1.BuildService]
        }), 
        __metadata('design:paramtypes', [build_service_1.BuildService])
    ], BuildListComponent);
    return BuildListComponent;
}());
exports.BuildListComponent = BuildListComponent;
//# sourceMappingURL=build-list.component.js.map