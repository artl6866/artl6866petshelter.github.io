import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PetsComponent } from './pets/pets.component';
import { NewComponent } from './pets/new/new.component';
import { UpdateComponent } from './pets/update/update.component';
import { DetailsComponent } from './pets/details/details.component';

const routes: Routes = [
  {path: '', redirectTo: 'pets', pathMatch: 'full'},
  {path: 'pets', component: PetsComponent},
  {path: 'pets/new', component: NewComponent},
  {path: 'pets/:id/edit', component: UpdateComponent},
  {path: 'pets/:id/details', component: DetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
