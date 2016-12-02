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
var teamProject_service_1 = require('./teamProject.service');
var teamProjectListComponent = (function () {
    function teamProjectListComponent(teamProjectService) {
        this.teamProjectService = teamProjectService;
        this.mode = 'Observable';
    }
    teamProjectListComponent.prototype.ngOnInit = function () {
        this.getTeamProjects();
    };
    teamProjectListComponent.prototype.getTeamProjects = function () {
        var _this = this;
        this.teamProjectService.getTeamProjects()
            .subscribe(function (team_projects) { return _this.team_projects = team_projects; }, function (error) { return _this.errorMessage = error; });
    };
    teamProjectListComponent.prototype.onChangeObj = function (newObj) {
        console.log(newObj);
        this.selectedTeamProjectObj = newObj;
        this.TeamProject = newObj;
        console.log(this.TeamProject);
        // to do  call the other api with the name
    };
    teamProjectListComponent = __decorate([
        core_1.Component({
            selector: 'teamProject-list',
            templateUrl: 'app/TeamProject/teamProject-list.component.html',
            providers: [teamProject_service_1.TemProjectService]
        }), 
        __metadata('design:paramtypes', [teamProject_service_1.TemProjectService])
    ], teamProjectListComponent);
    return teamProjectListComponent;
}());
exports.teamProjectListComponent = teamProjectListComponent;
//# sourceMappingURL=teamProject-list.component.js.map