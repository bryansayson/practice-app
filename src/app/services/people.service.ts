import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getPeople() {
  	let url = 'http://localhost:9000/people';
  	return this.http.get(url).map(res => res.json());
  }

  addPerson(newPerson: object) {
  	let url = 'http://localhost:9000/people';
  	return this.http.post(url, newPerson).subscribe((res) => {
  		console.log(res);
  	});
  }

  deletePerson(id: number) {
  	let url = 'http://localhost:9000/people/' + id;
  	console.log(url);
  	return this.http.delete(url).subscribe((res) => {
  		console.log(res);
  	});
  }
}
