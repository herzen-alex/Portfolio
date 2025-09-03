import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslateModule],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

}
