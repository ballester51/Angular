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
var detailBuild_service_1 = require('./detailBuild.service');
var DetailBuildListComponent = (function () {
    //newone = teamProjectListComponent.
    function DetailBuildListComponent(detailBuildService) {
        this.detailBuildService = detailBuildService;
        this.mode = 'Observable';
    }
    DetailBuildListComponent.prototype.ngOnChanges = function () {
        if (typeof this.BuildName !== 'undefined') {
            // the variable is defined
            //this.UrlDetailBuild="http://web/tfs/Proyecto/" + this.BuildName.name + "/_apis/build/builds?api-version=2.0"
            this.UrlDetailBuild = "http://web/tfs/Proyecto/" + this.BuildName.project.name + "/_apis/build/definitions/" + this.BuildName.definition.id + "?api-version=2.0";
            //this.UrlDetailBuild="http://web/tfs/Proyecto/"+ this.BuildName.project.name +"/_apis/build/definitions/"+ this.BuildName.id +"?api-version=2.0"
            console.log('URL dir UrlDetailBuild');
            console.log(this.UrlDetailBuild);
            this.getDetailBuilds();
        }
    };
    DetailBuildListComponent.prototype.getDetailBuilds = function () {
        var _this = this;
        this.detailBuildService.getDetailBuilds(this.UrlDetailBuild)
            .subscribe(function (detailBuilds) { return _this.detailBuilds = detailBuilds; }, function (error) { return _this.errorMessage = error; });
    };
    DetailBuildListComponent.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.selectedDetailBuildObj = newObj;
        // to do  call the other api with the name
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DetailBuildListComponent.prototype, "BuildName", void 0);
    DetailBuildListComponent = __decorate([
        core_1.Component({
            selector: 'detailBuild-list',
            templateUrl: 'app/DetailBuild/detailBuild-list.component.html',
            providers: [detailBuild_service_1.DetailBuildService]
        }), 
        __metadata('design:paramtypes', [detailBuild_service_1.DetailBuildService])
    ], DetailBuildListComponent);
    return DetailBuildListComponent;
}());
exports.DetailBuildListComponent = DetailBuildListComponent;
//# sourceMappingURL=detailBuild-list.component.js.map