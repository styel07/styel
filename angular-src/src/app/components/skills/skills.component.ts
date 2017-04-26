import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Object;

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
