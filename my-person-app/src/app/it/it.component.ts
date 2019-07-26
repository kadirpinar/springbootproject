import { Component, OnInit } from '@angular/core';
import {PersonServiceService} from "../person-service.service";
import {Router} from "@angular/router";
import {LoginServiceService} from "../login-service.service";

@Component({
  selector: 'app-it',
  templateUrl: './it.component.html',
  styleUrls: ['./it.component.css']
})
export class ITComponent implements OnInit {

  public  personList: any;
  public  It:any;
  constructor(private personService:PersonServiceService,private router:Router,
              private login:LoginServiceService) { }
  id:any;
  ngOnInit() {
    this.personService.getAllPerson()
      .subscribe(data=>{this.personList=data;})

     this.personList.filter(department => department === "IT")
      .subscribe(d=>{this.It=d});

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
