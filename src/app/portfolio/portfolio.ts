import { Component,AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
export class Portfolio implements AfterViewInit {

  constructor(private route: ActivatedRoute) {}

  ngAfterViewInit() {
    this.route.fragment.subscribe(fragment => {
      if (fragment === 'contact') {
        const contactEl = document.getElementById('contact');
        if (contactEl) {
          setTimeout(() => contactEl.scrollIntoView({ behavior: 'smooth' }), 50);
        }
      }
    });
  }

  scrollToFragment() {
    const fragment = window.location.hash.replace('#', '');
    if (fragment === 'contact') {
      const el = document.getElementById('contact');
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 50);
    }
  }

}
