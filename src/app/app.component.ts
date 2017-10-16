import { Component } from '@angular/core';
import { PeopleService } from './services/people.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  people : Array<any>;

  constructor(private peopleService: PeopleService ) {}

  ngOnInit () {
  	this.getPeople();
  }

  addPerson(f: NgForm) {
  	let newPerson = f.value;
  	this.peopleService.addPerson(newPerson);
  	this.getPeople();
  }

  getPeople() {
  	this.peopleService.getPeople().subscribe((response) => {
  		this.people = response.people;
  	});
  }

  deletePerson(id: number) {
  	this.peopleService.deletePerson(id);
  }
}
