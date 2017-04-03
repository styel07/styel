import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillService {
  skill: any;
  constructor(private http: Http) { }

  getAllSkills() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get('https://style.me/skills', {headers: headers})
      .map(res => res.json());
  }
}
