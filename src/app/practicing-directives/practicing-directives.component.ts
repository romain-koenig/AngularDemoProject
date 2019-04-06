import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css'],
  styles : [`
  .overFive {
    color: white;
  }
  `]
})
export class PracticingDirectivesComponent implements OnInit {


  constructor() { }

  hiddenInstruction = true;
  displayOrHideDetails = "Show Details";
  clickHistory = [];
  timesClicked = 0;


  onBtnDisplayClick(event: Event) {
    this.timesClicked++;
    
    this.hiddenInstruction = !this.hiddenInstruction;
    this.displayOrHideDetails = this.displayOrHideDetails === "Show Details" ? "Hide Details" : "Show Details";
    
    this.clickHistory.push(this.timesClicked);
    
    console.log(this.timesClicked);
  }

  ngOnInit() {
  }

}
