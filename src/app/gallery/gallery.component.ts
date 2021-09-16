import { Component, OnInit } from '@angular/core';
import { Person } from '../core/person';
import { PersonService } from '../core/person.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  people: Person[];
  constructor(private personService: PersonService) {
    this.people = [];
  }

  ngOnInit(): void {
    this.showPhotos();
  }

  showPhotos() {
    this.personService.getPeople()
      .subscribe(
        response => {
          this.people = response;
        }
      );
  }
}
