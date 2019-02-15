import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { ActivatedRoute, Router } from '@angular/router'


@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  errors: string[] = [];
  thisPet = null;
  updatedPet:any= null;

  constructor(private petsService: PetsService,
    private route: ActivatedRoute,
    private router: Router) {

      this.route.paramMap.subscribe(
        params => {
          console.log("from params in constructor", params.get('id'));
          this.petsService.getOnePet(params.get('id'))
          .subscribe(petReturned =>{
            this.thisPet = petReturned

            this.updatedPet = {
              name: this.thisPet.name,
              type: this.thisPet.type,
              description: this.thisPet.description,
              skillone: this.thisPet.skillone,
              skilltwo: this.thisPet.skilltwo,
              skillthree: this.thisPet.skillthree,
              _id: this.thisPet._id
            }
          })
        }
      )
    }

ngOnInit() {
}

updatePet(){
console.log(this.updatedPet)
this.petsService.editPet(this.updatedPet)
.subscribe(
(response:any) =>{
console.log(response)
console.log("update is working")
if(response.error){
console.log(response.error)
this.errors = response.error
}
else{
this.router.navigateByUrl('/')
}
},
(err) => {
console.log(err)
}
)
}

}
