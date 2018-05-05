import { Component, OnInit } from '@angular/core';
import {GroupService} from '../group.service';
import {MatchService} from '../match.service';
import {Group} from '../group';
import {Team} from '../team';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {


pitches = ['pitch A', 'pitch B'];
selectedPitch: string;
options = [1, 2, 3];
optionSelected: any;

groups: Group[];
selectedGroup: Group;

teams: Team[];
team1: Team;
team2: Team;

order: number;
time: string;
response: Object;
obj: Object;
onGroupSelected(event) {

  this.teams = this.selectedGroup.teams;

  console.log(typeof this.selectedGroup);
  console.log(typeof event.target.value);
}

onTeamSelected(event) {
 }
constructor(private groupservice: GroupService, private matchService: MatchService) {
  console.log('Singam');
}
onSave() {
  if ( this.team1 === this.team2) {
    alert('same teams');
  } else {

    this.response = {
      group: this.selectedGroup.name,
      team1: this.team1.name,
      team2: this.team2.name,
      order: this.order,
      time: this.time,
      pitch: this.selectedPitch,
      isComplete: false
    };
    this.matchService.postMatch(this.response)
    .subscribe(obj => this.obj = obj);
    alert(this.obj);
  }
}


ngOnInit(): void {
    this.getGroups();
}

getGroups(): void {
  this.groupservice.getGroups()
        .subscribe(groups => this.groups = groups);
  // this.name = this.groupService.getName();
}

}
