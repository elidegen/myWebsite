import { Component, ElementRef, HostListener, AfterViewInit } from '@angular/core';


@Component({
  selector: 'app-project-component',
  templateUrl: './project-component.component.html',
  styleUrls: ['./project-component.component.scss']
})

export class ProjectComponentComponent implements AfterViewInit {
  projects = [
    {
      name: 'Join',
      language: 'HTML | CSS | Javascript | Firebase',
      description: 'Join is a Kanban management system designed to help teams efficiently organize, manage, and visualize tasks and projects. With intuitive features, real-time collaboration, and it\'s beautyful design, Join enables seamless teamwork and enhances productivity for every team.',
      github: 'https://github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
      img: 'assets/img/laptopJoin.png'
    },
    {
      name: 'Knights Journey',
      language: 'HTML | CSS | Javascript',
      description: 'Are you ready to prove your bravery and determination to save the kingdom from darkness? Follow in the footsteps of a true knight and experience an exciting adventure in Knight\'s Journey. Become the hero the kingdom desperately needs and defeat the dark forces that threaten it!',
      github: 'https://github.com/elidegen/game',
      ftp: 'https://elijah-degen.developerakademie.net/game/',
      img: 'assets/img/laptopGame.png'
    },
    {
      name: 'Portfolio',
      language: 'Angular | Typescript | HTML | SCSS',
      description: 'You like the website you are currently on? Of course I created it by myself. Check it out!',
      github: 'github.com/elidegen/portfolio',
      ftp: 'https://elijah-degen.developerakademie.net/elijah/',
      img: 'assets/img/laptopPortfolio.png'
    },
    {
      name: 'Join',
      language: 'Angular | Typescript | HTML | CSS | Firebase',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      github: 'github.com/elidegen/join',
      ftp: 'https://elijah-degen.developerakademie.net/join/',
      img: 'assets/img/laptop.png'
    },
  ];
  elements: any;
  constructor() { }

  ngAfterViewInit(): void {
    this.elements = document.querySelectorAll('.hidden');
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.elements.forEach((element: any) => {
      const componentPosition = element.offsetTop;
      const scrollPosition = window.pageYOffset;
      const pageBottom = scrollPosition + window.innerHeight;

      if (pageBottom >= componentPosition + 170) {
        element.classList.add('showBottom');
        element.classList.remove('hideBottom', 'hidden');
      } else {
        element.classList.add('hideBottom');
      }
    });
  }
}