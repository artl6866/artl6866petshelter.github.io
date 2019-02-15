import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetsComponent } from './pets/pets.component';
import { UpdateComponent } from './pets/update/update.component';
import { NewComponent } from './pets/new/new.component';
import { DetailsComponent } from './pets/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PetsService } from './pets.service';
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    PetsComponent,
    UpdateComponent,
    NewComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
