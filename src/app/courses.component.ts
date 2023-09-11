//Created my own Component

import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
    selector: 'courses',   //It's used like a css element <course></couses>
    template: `
        <h2>{{courses}}</h2>
        <ul>
            <li *ngFor= "let course of courses">   
                {{course}}
            </li>
        </ul>
    `  //And one you put that, the ouput is Fish with h2 font.  //also use of derivative
})

export class CoursesComponent{
    title = "List of courses"
    courses;

    //courses = ["Math", "Science", "Arts"]

    //logic for calling HTTP SERVICE? To get input in course like math, science etc from server.

    constructor(service: CoursesService){
        //let service = new CoursesService();
        this.courses = service.getCourses();
    }
}