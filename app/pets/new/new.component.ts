import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  errors: string[] = [];
  newPet:any = {
    name: '',
    type: '',
    description: '',
    skillone: '',
    skilltwo: '',
    skillthree: '',
  }

  constructor(private petsService: PetsService,
    private router: Router) { }

    ngOnInit() {
    }
  
    submitNewPet(){
      console.log(this.newPet)
      this.petsService.createNewPet(this.newPet)
      .subscribe(
        (response:any) =>{
          console.log(response)
          console.log("successful")
          if(response.error){
            console.log(response.error)
            this.errors = response.error
          }
          else{
            this.newPet = {
              name: '',
              type: '',
              description: '',
              skillone: '',
              skilltwo: '',
              skillthree: ''
            } 
            this.router.navigateByUrl('/')
          }
        },
        (err) => {
          console.log(err)
        }
      )
      
      
    }
  
  }
