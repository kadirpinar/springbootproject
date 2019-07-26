import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {PersonServiceService} from "../person-service.service";

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {

  constructor(private router: Router,private personService:PersonServiceService) { }
  personList :any;
  ngOnInit() {
  }
  onClickSubmit(data) {
    const person = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      department: data.department,
      salary: data.salary
    };
    this.personService.postPerson(person)
      .subscribe( postResponse => {
        this.personService.getAllPerson()
          .subscribe( getResponse => {
            this.personList= getResponse;
            this.router.navigate(['']);
          });
      });
  }
}
