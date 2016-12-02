import { Component, OnInit } from '@angular/core';
//import { Hero }              from '../hero';
//import { Build_definition}   from '../build_definition';
//import { HeroService }       from '../hero.service';
import { TemProjectService } from './teamProject.service';

@Component({
  selector: 'teamProject-list',
  templateUrl: 'app/TeamProject/teamProject-list.component.html',
  providers: [ TemProjectService ]
})
export class teamProjectListComponent implements OnInit {
  errorMessage: string;
  mode = 'Observable';
  team_projects: Object;
  selectedTeamProjectObj: Object;
  newObj: Object;
  TeamProject: Object;

  constructor (private teamProjectService: TemProjectService) {}

  ngOnInit() { this.getTeamProjects();
    
}

  getTeamProjects() {
    this.teamProjectService.getTeamProjects()
                     .subscribe(
                       team_projects => this.team_projects = team_projects,
                       error =>  this.errorMessage = <any>error);
  }

  
  onChangeObj(newObj:any) {
    console.log(newObj);
    this.selectedTeamProjectObj = newObj;
    this.TeamProject = newObj;
    console.log(this.TeamProject);

    // to do  call the other api with the name
  }
 
}