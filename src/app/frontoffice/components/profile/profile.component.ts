import { Component, OnInit } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  isSpecial = true;
  currentStyles: any;
  name: string;
  constructor(private _location: Location) {}

  ngOnInit(): void {
    this.currentStyles = {
      'font-style': this.isSpecial ? 'italic' : 'normal',
      'font-weight': !this.isSpecial ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '80px' : '12px',
    };
  }
  goBack() {
    this._location.back();
  }

  toggleSpecial() {
    this.isSpecial = !this.isSpecial;
  }
  upperName() {
    this.name = this.name.toUpperCase();
  }
}
