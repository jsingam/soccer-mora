import { Component, OnInit } from '@angular/core';
import {Group} from '../group';
import {GroupService} from '../group.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {

  groups: Group[];
  name: string;



  title = 'app';
  results: object[] = [
    {rank: 1, name: 'mora' , played: 2, win: 2, loss : 0},
    {rank: 2, name: 'pera' , played: 2, win: 1, loss : 1},
    {rank: 3, name: 'ruh' , played: 2, win: 1, loss : 1},
    {rank: 4, name: 'col' , played: 2, win: 0, loss : 2},
  ];

  constructor(private groupservice: GroupService) {}
  ngOnInit(): void {
      this.getGroups();
  }

  getGroups(): void {
    this.groupservice.getGroups()
          .subscribe(groups => this.groups = groups);
    // this.name = this.groupService.getName();
  }

}
