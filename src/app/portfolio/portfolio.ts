import { Component, AfterViewInit } from '@angular/core';
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
export class Portfolio {

  constructor(private route: ActivatedRoute) { }

  ngAfterViewInit() {
    setTimeout(() => this.scrollToFragment(), 0);
    this.route.fragment.subscribe(() => this.scrollToFragment());
  }


scrollToFragment() {
  const fragment = window.location.hash.replace('#', '');
  if (!fragment) return;

  const tryScroll = () => {
    const el = document.getElementById(fragment);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      // если элемента нет, попробуем через 50 мс
      setTimeout(tryScroll, 20);
    }
  };

  tryScroll();
}




}



// scrollToFragment() {
//   const fragment = window.location.hash.replace('#', '');
//   if (!fragment) return;

//   let retries = 20; // максимум 20 попыток (~2 секунды)

//   const tryScroll = () => {
//     const el = document.getElementById(fragment);
//     if (el) {
//       el.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     } else if (retries > 0) {
//       retries--;
//       setTimeout(tryScroll, 100);
//     }
//   };

//   tryScroll();
// }
