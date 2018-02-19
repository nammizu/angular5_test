import { Component, OnInit } from '@angular/core';
import { ASSIGNMENTS, Assignment } from './menu-assignment';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.scss']
})
export class AssignmentComponent implements OnInit {
  assignmentList = ASSIGNMENTS;
  constructor() { }

  ngOnInit() {
  }

}
