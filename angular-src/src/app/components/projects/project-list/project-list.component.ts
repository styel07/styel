import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects = [
    { name: 'Bboynation' },
    { name: 'LANEWins' },
    { name: 'Paradise Cleaners Inc.' },
    { name: 'StyeL' },
    { name: 'Bakery' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
