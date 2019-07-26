import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from "../person-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private personService:PersonServiceService,private router: Router) { }

  ngOnInit() {
  }
  personList :any;
  onClickSubmit(data) {
    const person = {
      id: data.id,
      name: data.name,
      surname: data.surname,
      department: data.department,
      salary: data.salary
    };
    this.personService.updatePerson(person)
      .subscribe( postResponse => {
        this.personService.getAllPerson()
          .subscribe( getResponse => {
            this.personList= getResponse;
            this.router.navigate(['']);
          });
      });
  }
}
