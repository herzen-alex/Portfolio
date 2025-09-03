import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

type MobileMenuState = {
  active?: boolean;
  closing?: boolean;
  hidden?: boolean;
};

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  languageToggle = true;
  mobileMenuClass: MobileMenuState = { hidden: true };
  animationDuration = 500;
  @Input() linkColor: string[] = ['white', 'white', 'white', 'white'];

  constructor(private translate: TranslateService) {
    const savedLang = localStorage.getItem('lang') || 'de';
    this.languageToggle = savedLang === 'de';
    this.translate.use(savedLang);
  }

  setLanguage(value: boolean): void {
    this.languageToggle = value;
    const lang = value ? 'de' : 'en';
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  toggleMobileMenu() {
    if (this.mobileMenuClass.active) {
      this.mobileMenuClass = { closing: true };
      setTimeout(() => {
        this.mobileMenuClass = { hidden: true };
        document.body.style.overflow = 'auto';
      }, this.animationDuration);
    } else {
      this.mobileMenuClass = {};
      setTimeout(() => {
        this.mobileMenuClass = { active: true };
        document.body.style.overflow = 'hidden';
      }, 10);
    }
  }


}
