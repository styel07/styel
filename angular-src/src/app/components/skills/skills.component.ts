import { Component, OnInit } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  skills: Object;

  constructor(
    private skillService: SkillService
  ) { }

  ngOnInit() {
    // load the skills on intitialization
    this.skillService.getAllSkills().subscribe(skills => {
      this.skills = skills.skills;
    },
    err => {
      console.log(err);
      return false;
    }
  );
  }

}
