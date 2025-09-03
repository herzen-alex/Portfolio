import { Component } from '@angular/core';
import { Hero } from "./hero/hero";
import { About } from './about/about';
import { SkillSet } from './skill-set/skill-set';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [Hero, About, SkillSet, Projects, Contact],
  templateUrl: './portfolio.html',
  styleUrl: './portfolio.scss'
})
export class Portfolio {

}
