import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { ColleaguesThoughts } from './colleagues-thoughts/colleagues-thoughts';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [TranslateModule, ColleaguesThoughts, RouterLink, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

}
