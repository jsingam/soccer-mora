import { Component, OnInit } from '@angular/core';
import {Match} from '../pendingMatch';
import {MatchService} from '../match.service';
import {FinishedMatch} from '../finishedMatch';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


groups = ['Group A', 'Group B', 'Group C', 'Group D'];
selectedGroup: string;

matches: Match[];
prematches: Match[];
selectedMatch: Match;

team1: string;

temp: Object;

team2: string;

score1: number;
score2: number;

result: FinishedMatch;

onGroupSelected(event) {
  this.matches = [];
 for ( let m of this.prematches) {
   if ( m.group === this.selectedGroup) {
     this.matches.push(m);

   }
 }
}

onSave() {
  var date= new Date();
  this.result = {
    group: this.selectedMatch.group,
    team1: this.selectedMatch.team1,
    team2: this.selectedMatch.team2,
    pitch: this.selectedMatch.pitch,
    isComplete: true,
    order: this.selectedMatch.order,
    score1: this.score1,
    score2: this.score2,
    time: date

  };
  this.matchService.updateMatch(this.result, this.selectedMatch._id)
  .subscribe(obj => this.temp = obj);
  alert(this.temp);

}



onMatchSelected(event) {
  this.team1 = this.selectedMatch.team1;
  this.team2 = this.selectedMatch.team2;
}
  constructor(private matchService: MatchService) { }

  ngOnInit() {
    this.matchService.getPendingMatches()
    .subscribe(matchs => this.prematches = matchs);
  }

}
