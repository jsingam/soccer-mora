import { Component, OnInit, Input } from '@angular/core';
import {Group} from '../group';
@Component({
  selector: 'app-mora-cup-result',
  templateUrl: './mora-cup-result.component.html',
  styleUrls: ['./mora-cup-result.component.css']
})
export class MoraCupResultComponent implements OnInit {

  constructor() { }
  @Input() group: Group;

  results: object[] = [
    {rank: 1, name: 'mora' , played: 2, win: 2, loss : 0, draw:0,gc:2,gs:5,gd:3,pts:6},
    {rank: 2, name: 'pera' , played: 2, win: 1, loss : 1,draw:0,gc:2,gs:5,gd:3,pts:3},
    {rank: 3, name: 'ruh' , played: 2, win: 1, loss : 1,draw:0,gc:2,gs:5,gd:3,pts:3},
    {rank: 4, name: 'col' , played: 2, win: 0, loss : 2,draw:0,gc:2,gs:5,gd:3,pts:0},
  ];

  ngOnInit() {
  }



}
