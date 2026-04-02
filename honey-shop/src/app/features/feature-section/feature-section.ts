import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-feature-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './feature-section.html',
  styleUrl: './feature-section.scss',
})
export class FeatureSection {}
