import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from "../person-service.service";
import {Router} from "@angular/router";
import {LoginServiceService} from "../login-service.service";

@Component({
  selector: 'app-my-center',
  templateUrl: './my-center.component.html',
  styleUrls: ['./my-center.component.css']
})
export class MyCenterComponent implements OnInit {

  public  personList: any;
  constructor(private personService:PersonServiceService,private router:Router,private login:LoginServiceService) { }
  id:any;
  ngOnInit() {
  this.personService.getAllPerson()
    .subscribe(data=>{this.personList=data;})
  }


  navigateToInsertData(): void {
    this.router.navigate(['insert']);
  }

  deletePerson(id: any){
    this.personService.deletePerson(id)
      .subscribe(deleteResponse=>{
      this.personService.getAllPerson()
        .subscribe(data=>{
        this.personList=data;
      })
    });
  }


  navigateToUpdateData(person) {
    this.router.navigate(['update/'+person.id]);

  }

  navigateToHomePage(){
    this.router.navigate(['center']);
  }

  logout() {
    this.login.logout()
    this.router.navigate(['']);
}

  navigateToITData() {
    this.router.navigate(['it']);
  }
}
