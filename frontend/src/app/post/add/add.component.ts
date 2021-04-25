import { Component, OnInit } from '@angular/core';

import {FormsModule} from '@angular/forms'
import { Router } from '@angular/router';
import {ListviewService} from 'src/app/listview.service'


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(
    private listService:ListviewService,
    private router: Router
  ) { }

  onSubmit(data){
    this.listService.post(data).subscribe(()=>{
      console.log("data posted");
      this.router.navigate(['/'])
    })
  }


  ngOnInit(): void {
  }

}
