import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FeatureSection } from '../../feature-section/feature-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FeatureSection, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
