import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../pets.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  thisPet = null;

  constructor(private petsService: PetsService,
              private route: ActivatedRoute,
              private router: Router) {

                this.route.paramMap.subscribe(
                  params => {
                    console.log("from params in constructor", params.get('id'));
                    this.petsService.getOnePet(params.get('id'))
                    .subscribe(petReturned =>{
                      this.thisPet = petReturned
                    })
                  }
                )
               }

  ngOnInit() {
  }

  destroy(id){
    this.petsService.destroy(id)
    .subscribe(
      (data) => {
        console.log("deleted successfully", data)
      }
    )
    this.router.navigateByUrl('/')
  }
}