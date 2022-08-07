import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-persojanes',
  templateUrl: './persojanes.component.html',
  styleUrls: ['./persojanes.component.css']
})
export class PersojanesComponent implements OnInit {


  ngOnInit(): void {
  }
  //@Input() personajes: Personaje[] = []

  get personajes(): Personaje[]{
    return this.DbzService.personajes;
  }

  constructor ( private DbzService: DbzService ){
    
  }

}
