import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-image',
  imports: [NgOptimizedImage],
  templateUrl: './image.html',
  styleUrl: './image.css'
})
export class Image {
  protected title = "Image page"
}
