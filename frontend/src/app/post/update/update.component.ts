import { Component, OnInit } from '@angular/core';


import {FormsModule} from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router';
import {ListviewService} from 'src/app/listview.service'
import { List } from 'src/app/models/list';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:string;
  lists:List;

  constructor(
    private listService:ListviewService,
    private router :Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    
    this.route.params.subscribe((params: Params)=>{  
      let id:string = this.route.snapshot.params['id'];
      this.listService.getList(id).subscribe((list:List) => {
        this.lists = list
    });
    });
  }

  onSubmit(data){
    
    this.listService.put(this.id,data).subscribe(()=>{
      console.log("data posted");
      this.router.navigate(['/'])
    })
  }


}
