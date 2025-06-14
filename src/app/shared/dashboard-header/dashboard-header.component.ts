import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-header',
  templateUrl: './dashboard-header.component.html',
  styleUrls: ['./dashboard-header.component.css']
})
export class DashboardHeaderComponent {
  activeButton: string = 'Today';

  setActive(label: string) {
    this.activeButton = label;
  }
}
