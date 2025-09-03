import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { StickerFooter } from '../../shared/sticker-footer/sticker-footer';
import { FormsModule, NgForm } from '@angular/forms';
import { Footer } from '../../shared/footer/footer';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslateModule, StickerFooter, FormsModule, Footer, RouterModule, HttpClientModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class Contact {

  formData = {
    name: '',
    email: '',
    message: '',
    privacy: false
  };

  formSubmitted = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  constructor(private http: HttpClient) { }

  onSubmit(form: NgForm) {
    this.formSubmitted = true;
    if (!form.valid) {
      Object.values(form.controls).forEach((c: any) => c.markAsTouched());
      console.log('Form is invalid'); return;
    }
    const url = 'https://alex-herzen.de/contact/sendMail.php';
    const body = this.formData;
    this.http.post<{ success: boolean; message: string }>(url, body)
      .subscribe({
        next: res => res.success ? this.handleSuccess(form) : this.handleError(res.message),
        error: err => {
          console.error('Error sending email', err);
          this.handleError('Something went wrong. Please try again later.');
        }
      });
  }

  private handleSuccess(form: NgForm) {
    this.showSuccessMessage = true;
    this.showErrorMessage = false;
    form.resetForm();
    this.formSubmitted = false;
  }

  private handleError(message: string) {
    this.showErrorMessage = true;
    this.showSuccessMessage = false;
    console.log('Send error:', message);
    setTimeout(() => this.showErrorMessage = false, 5000);
  }

}
