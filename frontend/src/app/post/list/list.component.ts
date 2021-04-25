import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {ListviewService} from 'src/app/listview.service'
import {List} from  'src/app/models/list'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lists : List[] = [];

  constructor(
    private listService:ListviewService 
    ) { }

  ngOnInit(): void {
    this.listService.getLists().subscribe((lists:List[]) => this.lists=lists  );
  }

 

}
