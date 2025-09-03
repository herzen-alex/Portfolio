import { Component, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../header/header';
import { StickerProject } from '../sticker-project/sticker-project';


@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [CommonModule, TranslateModule, Header, StickerProject],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetails {
  projectId: string | null = '1';
  linkColor: string[] = ['black', 'white', 'white', 'white'];


  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.paramMap.subscribe(params => {
      this.projectId = params.get('id');
    });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    const width = window.innerWidth;
    this.updateLinkColor(width);
  }

  private updateLinkColor(width: number) {
  if (width <= 1210) {
    this.linkColor = ['black', 'black', 'black', 'black'];
  } else if (width <= 2300) {
    this.linkColor = ['black', 'black', 'white', 'white'];
  } else {
    this.linkColor = ['black', 'white', 'white', 'white'];
  }
}

  nextProject() {
    const projects = ['1', '2', '3'];
    const currentIndex = projects.indexOf(this.projectId || '1');
    const nextIndex = (currentIndex + 1) % projects.length;
    this.router.navigate(['/project_details', projects[nextIndex]]);
  }
}
