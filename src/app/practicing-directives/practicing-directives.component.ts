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

  onBtnDisplayClick(event: Event) {
    
    this.hiddenInstruction = !this.hiddenInstruction;
    this.displayOrHideDetails = this.displayOrHideDetails === "Show Details" ? "Hide Details" : "Show Details";
    
    // Using number of clicks
    //this.clickHistory.push(this.clickHistory.length + 1);
    //using timestanp
    this.clickHistory.push(new Date());
  }

  ngOnInit() {
  }

}
