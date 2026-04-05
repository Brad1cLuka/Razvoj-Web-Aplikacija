import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
   images = [
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png',
    '/assets/products/placeholder.png'
  ];

  selectedIndex: number | null = null;

  openLightbox(index: number) {
    this.selectedIndex = index;
  }

  close() {
    this.selectedIndex = null;
  }

  next() {
    if (this.selectedIndex !== null) {
      this.selectedIndex =
        (this.selectedIndex + 1) % this.images.length;
    }
  }

  prev() {
    if (this.selectedIndex !== null) {
      this.selectedIndex =
        (this.selectedIndex - 1 + this.images.length) % this.images.length;
    }
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {
    if (this.selectedIndex === null) return;

    if (event.key === 'ArrowRight') {
      this.next();
    }

    if (event.key === 'ArrowLeft') {
      this.prev();
    }

    if (event.key === 'Escape') {
      this.close();
    }
  }
}
