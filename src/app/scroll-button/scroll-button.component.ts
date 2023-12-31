import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-scroll-button',
  templateUrl: './scroll-button.component.html',
  styleUrls: ['./scroll-button.component.scss']
})
export class ScrollButtonComponent {
  scrollPosition: number = 0;

  @HostListener("window:scroll", ['$event'])
  onWindowScroll(): void {
    this.scrollPosition = window.scrollY;
  }
}