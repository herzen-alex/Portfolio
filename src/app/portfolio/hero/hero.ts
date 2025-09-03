import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { Header } from '../../shared/header/header';

interface FrontendLetter {
  upper: string;
  lower: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [Header, CommonModule, FormsModule, TranslateModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})

export class Hero {
  isHovered: boolean = false;
  shouldAnimate: boolean = false;
  hoveredFrontendIndex: number | null = null;
  hoveredDeveloperIndex: number | null = null;

  getLetter(letter: { upper: string, lower: string }, index: number, isDeveloper = false): string {
    const isHovered = isDeveloper
      ? this.hoveredDeveloperIndex === index
      : this.hoveredFrontendIndex === index;
    return isHovered ? letter.lower : letter.upper;
  }

  frontend: FrontendLetter[] = [
    { upper: 'F', lower: 'f' },
    { upper: 'r', lower: 'R' },
    { upper: 'o', lower: 'O' },
    { upper: 'n', lower: 'N' },
    { upper: 't', lower: 'T' },
    { upper: 'e', lower: 'E' },
    { upper: 'n', lower: 'N' },
    { upper: 'd', lower: 'D' }
  ];

  developer = [
    { upper: 'D', lower: 'd' },
    { upper: 'E', lower: 'e' },
    { upper: 'V', lower: 'v' },
    { upper: 'E', lower: 'e' },
    { upper: 'L', lower: 'l' },
    { upper: 'O', lower: 'o' },
    { upper: 'P', lower: 'p' },
    { upper: 'E', lower: 'e' },
    { upper: 'R', lower: 'r' }
  ];

  onPhotoMouseEnter() {
    this.shouldAnimate = true;
    this.isHovered = true;
    setTimeout(() => this.shouldAnimate = false, 500);
  }

  onPhotoMouseLeave() {
    this.shouldAnimate = true;
    this.isHovered = false;
    setTimeout(() => this.shouldAnimate = false, 500);
  }

}
