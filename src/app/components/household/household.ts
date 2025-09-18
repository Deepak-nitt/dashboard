import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-household',
  imports: [CommonModule,FormsModule],
  templateUrl: './household.html',
  styleUrl: './household.css'
})
export class Household {

  household=[
    {
      id:1 , title:"Rainwater Harwesting", location:"Gujrat", households:240, status:"Active"
    },
    {
      id:2 , title:"Filter Distribution", location:"Odisha", households:120, status:"Planning"
    }
    ,
    {
      id:3 , title:"Well Restoration", location:"Maharashtra", households:430, status:"Active"
    }



  ]

}
