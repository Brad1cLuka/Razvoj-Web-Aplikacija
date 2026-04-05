import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
   formData = {
    name: '',
    email: '',
    message: ''
  };

  loading = false;
  successMessage = false;

  async submitForm(form: any) {
    if (form.invalid) return;

    this.loading = true;
    this.successMessage = false;

    try {
      const response = await fetch('https://formspree.io/f/xeepvowk', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(this.formData)
      });

      if (response.ok) {
        this.successMessage = true;
        form.resetForm();
      }

    } catch (error) {
      console.error(error);
    }

    this.loading = false;
  }
}
