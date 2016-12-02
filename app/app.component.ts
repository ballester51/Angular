import { Component } from '@angular/core';
//import './rxjs-operators';
import './rxjs-extensions';

@Component({
    selector: 'my-app',
    template: `
    <!--<hero-list></hero-list>-->
    <table>
    <tr>
    </tr>
    <tr>
    <th>
    <h1>ORIGIN</h1>
    <teamProject-list></teamProject-list>
    </th>
    <th>
    <h1>TARGET</h1>
    <teamProject-list></teamProject-list>
    </th>
    <!--<th>
    <detailBuild-list></detailBuild-list>
    </th>-->
    </tr>
    </table>
  `
})
export class AppComponent { }
