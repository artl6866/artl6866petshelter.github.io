import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor(private http: HttpClient) { }

  createNewPet(newPet){
    return this.http.post('/pet', newPet)
  }
  getAllPets(){
    return this.http.get('/pet')
  }
  getOnePet(id){
    return this.http.get(`/pet/${id}/details`)
  }
  editPet(updatedPet){
    return this.http.put(`/pet`, updatedPet)
  }
  destroy(id){
    return this.http.delete(`/pet/${id}`)
  }

}

