import { IonChip, IonLabel } from '@ionic/angular/standalone';
import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
  standalone: true,
  imports: [IonChip, IonLabel, TitleCasePipe],
})
export class StatusBadgeComponent {
  @Input() status!: string;

  get badgeColor(): string {
    switch (this.status?.toLowerCase()) {
      case 'completed':
        return 'success';
      case 'in progress':
        return 'tertiary';
      case 'pending':
        return 'warning';
      case 'on hold':
        return 'medium';
      case 'cancelled':
        return 'danger';
      default:
        return 'light';
    }
  }
}
