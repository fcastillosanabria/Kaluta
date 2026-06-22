import { Component, OnInit } from '@angular/core';
import { NavStateService } from 'src/app/services/nav-state.service';

@Component({
  selector: 'app-secondary-menu',
  templateUrl: './secondary-menu.component.html',
  styleUrls: ['./secondary-menu.component.css']
})
export class SecondaryMenuComponent implements OnInit {
  isMerged = false;

  constructor(private navState: NavStateService) {}

  ngOnInit() {
    this.navState.isMerged$.subscribe(v => (this.isMerged = v));
  }
}
