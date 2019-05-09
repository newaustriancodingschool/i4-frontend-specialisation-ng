import { Component, OnInit, Input } from '@angular/core';

interface Participant {
  name: string;
  github: string;
  project: string;
}

@Component({
  selector: 'app-participant',
  templateUrl: './participant.component.html',
  styleUrls: ['./participant.component.scss']
})
export class ParticipantComponent implements OnInit {
  @Input() public participant: Participant;
  public url: string;

  constructor() {}

  ngOnInit() {
    this.url = `https://stackblitz.com/github/${this.participant.github}/${this.participant.project}`;
  }
}
