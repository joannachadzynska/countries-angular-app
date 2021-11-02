import { Component, HostListener, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Country } from 'src/app/country';

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

    constructor(private store: Store<{ countries: Country[] }>) {}

    ngOnInit(): void {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.isMobile = this.screenWidth <= 768;
        this.store.dispatch({ type: '[World Page] Fetch Countries' });
    }

    @HostListener('window: resize', ['$event'])
    onResize(event: any) {
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        this.isMobile = this.screenWidth <= 768;
    }
}
