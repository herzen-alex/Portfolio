import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-skill-set',
  imports: [TranslateModule],
  templateUrl: './skill-set.html',
  styleUrl: './skill-set.scss'
})
export class SkillSet {

  currentIndex = 0;
  isOpen = false;
  isAnimating = false;

 stickerImages = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png'
  ];

   toggleSticker() {
    if (this.isAnimating) return;
    this.isAnimating = true;
    const targetIndex = this.isOpen ? 0 : this.stickerImages.length - 1;
    const direction = this.isOpen ? -1 : 1;
    this.animateSticker(targetIndex, direction);
  }

  private animateSticker(target: number, direction: number) {
    const interval = setInterval(() => {
      this.currentIndex += direction;
      if (this.currentIndex === target) {
        clearInterval(interval);
        this.isAnimating = false;
        this.isOpen = !this.isOpen;
      }
    }, 120);
  }
}
