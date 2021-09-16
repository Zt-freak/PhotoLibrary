import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../core/person';
import { PersonService } from '../core/person.service';


@Component({
  selector: 'app-person-page',
  templateUrl: './person-page.component.html',
  styleUrls: ['./person-page.component.scss']
})
export class PersonPageComponent implements OnInit {
  person: Person = new Person();
  constructor(public activatedRoute:ActivatedRoute, private personService: PersonService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      let index = params['index'];
      this.personService.getPerson(index)
      .subscribe(
        response => {
          this.person = response;
        }
      );
      });
  }

}
