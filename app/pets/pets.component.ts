import { Component, OnInit } from '@angular/core';
import { PetsService } from '../pets.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {

  allPets: any = []

  constructor(private petsService: PetsService) { }

  ngOnInit() {
    this.petsService.getAllPets()
  .subscribe(
    (data) => [this.allPets = data]
  )
  }
  
}
