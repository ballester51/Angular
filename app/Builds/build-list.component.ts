import { Component, OnChanges, Input } from '@angular/core';
//import { Hero }              from '../hero';
//import { Build_definition}   from '../build_definition';
//import { HeroService }       from '../hero.service';
import { BuildService } from './build.service';

@Component({
  selector: 'build-list',
  templateUrl: 'app/Builds/build-list.component.html',
  providers: [ BuildService ]
})
export class BuildListComponent implements OnChanges {

  @Input() TeamProject: any;

  errorMessage: string;
  mode = 'Observable';
  builds: Object;
  selectedBuildObj: Object;
  newObj: Object;
  BuildName: Object;
  UrlListBuild: string;

  constructor (private buildService: BuildService) {}


  ngOnChanges() { 

if (typeof this.TeamProject !== 'undefined') {
    // the variable is defined
this.UrlListBuild="http://web/tfs/Proyecto/" + this.TeamProject.name + "/_apis/build/builds?api-version=2.0"

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


}

  getBuilds() {
    this.buildService.getBuilds(this.UrlListBuild)
                     .subscribe(
                       builds => this.builds = builds,
                       error =>  this.errorMessage = <any>error);
  }

  
  onChangeObj(newObj:any) {
    console.log(newObj);
    this.selectedBuildObj = newObj;

    this.BuildName = newObj;
        console.log(this.BuildName);0


    // to do  call the other api with the name
  }
 
}