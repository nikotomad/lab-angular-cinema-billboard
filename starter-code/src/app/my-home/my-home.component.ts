import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers:[ CinemaService ]
})
export class MyHomeComponent implements OnInit {

  pelis = [];

  constructor(public cinema: CinemaService) { }

  ngOnInit() {
    this.pelis = this.cinema.getMovies();
  }

}
