import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills = [
		{ name: 'angular', duration: 2, type: 'f' },
		{ name: 'express', duration: 2, type: 'b' },
		{ name: 'sql', duration: 2, type: 'b' },
		{ name: 'javascript', duration: 4, type: 'f' },
		{ name: 'sass', duration: 1, type: 'f' },
		{ name: 'css', duration: 4, type: 'f' },
		{ name: 'html', duration: 4, type: 'f' },
		{ name: 'react', duration: 1, type: 'f' },
		{ name: 'webpack', duration: 1, type: 'f'},
		{ name: 'gulp', duration: 1, type: 'b'}
	];

  constructor(
    private skillService: SkillService,
    private router: Router) { }

  ngOnInit() {
    // load the skills on intitialization
    this.skillService.getAllSkills().subscribe(skills => {
      this.skills = skills;
      console.log('returned from server: ', skills);
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

}
