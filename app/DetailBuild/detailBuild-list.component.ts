import { Component,OnChanges,Input } from '@angular/core';
//import { Hero }              from '../hero';
//import { Build_definition}   from '../build_definition';
//import { HeroService }       from '../hero.service';
import { DetailBuildService } from './detailBuild.service';
import { teamProjectListComponent } from '../TeamProject/teamProject-list.component';

@Component({
  selector: 'detailBuild-list',
  templateUrl: 'app/DetailBuild/detailBuild-list.component.html',
  providers: [ DetailBuildService ]
})
export class DetailBuildListComponent implements OnChanges {

  @Input() BuildName: any;

  errorMessage: string;
  mode = 'Observable';
  detailBuilds: Object;
  selectedDetailBuildObj: Object;
  newObj: Object;
  newone: Object;
  UrlDetailBuild: string;
  
//newone = teamProjectListComponent.

  constructor (private detailBuildService: DetailBuildService) {}

  ngOnChanges() { 

  if (typeof this.BuildName !== 'undefined') {
        // the variable is defined
        //this.UrlDetailBuild="http://web/tfs/Proyecto/" + this.BuildName.name + "/_apis/build/builds?api-version=2.0"
        this.UrlDetailBuild="http://web/tfs/Proyecto/"+ this.BuildName.project.name +"/_apis/build/definitions/"+ this.BuildName.definition.id +"?api-version=2.0"
        //this.UrlDetailBuild="http://web/tfs/Proyecto/"+ this.BuildName.project.name +"/_apis/build/definitions/"+ this.BuildName.id +"?api-version=2.0"
        console.log('URL dir UrlDetailBuild');
        console.log(this.UrlDetailBuild);
        this.getDetailBuilds();
}

}

  getDetailBuilds() {
                      this.detailBuildService.getDetailBuilds(this.UrlDetailBuild)
                     .subscribe(
                       detailBuilds => this.detailBuilds = detailBuilds,
                       error =>  this.errorMessage = <any>error);
  }

  
  onChangeObj(newObj:any) {
                            console.log(newObj);
                            this.selectedDetailBuildObj = newObj;
                            // to do  call the other api with the name
  }
 
}