import {
  IonChip,
  IonLabel,
  IonIcon,
  IonBadge,
} from '@ionic/angular/standalone';
import { Component, inject, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { StateService } from 'src/app/core/services/state/state.service';
import { addIcons } from 'ionicons';
import {
  checkmarkDoneOutline,
  closeOutline,
  constructOutline,
  helpOutline,
  timeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-status-badge',
  templateUrl: './status-badge.component.html',
  styleUrls: ['./status-badge.component.scss'],
  standalone: true,
  imports: [TitleCasePipe, IonIcon, IonBadge],
})
export class StatusBadgeComponent {
  private stateService: StateService = inject(StateService);

  @Input()
  status!: string;

  @Input()
  withIcon = true;

  constructor() {
    addIcons({
      helpOutline,
      closeOutline,
      timeOutline,
      constructOutline,
      checkmarkDoneOutline,
    });
  }
  getBadgeColor(status: string): string {
    return this.stateService.getStateProperties(status).color;
  }

  getStatusIcon(status: string): string {
    return this.stateService.getStateProperties(status).icon;
  }
}
