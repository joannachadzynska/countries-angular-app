import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.scss'],
})
export class RegionsComponent implements OnInit {
  regions: string[] = ['europe', 'americas', 'oceania', 'asia', 'africa'];
  screenWidth: any;
  screenHeight: any;
  isMobile: boolean = true;
  isRegions: boolean = true;

  constructor() {}

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.isMobile = this.screenWidth <= 768;
  }

  @HostListener('window: resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;
    this.isMobile = this.screenWidth <= 768;
  }
}
