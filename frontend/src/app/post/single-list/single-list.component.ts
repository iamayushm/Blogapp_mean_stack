import { Component, OnInit } from '@angular/core';

import {ListviewService} from 'src/app/listview.service'
import {List} from  'src/app/models/list'

import {ActivatedRoute, Router, Params} from '@angular/router'

@Component({
  selector: 'app-single-list',
  templateUrl: './single-list.component.html',
  styleUrls: ['./single-list.component.css']
})
export class SingleListComponent implements OnInit {

  lists : List;

  constructor(
    private listService:ListviewService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{  

      let id:string = this.route.snapshot.params['id'];
      this.listService.getList(id).subscribe((list:List) => {
        this.lists = list
    });
    });
  }

  deleteBlog(blog:List){
    this.listService.delete(blog._id).subscribe();
  }


}
