import { Component, inject } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { DarkModeService } from './core/services/darkMode/dark-mode.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  private darkModeService: DarkModeService = inject(DarkModeService);

  constructor() {
    this.darkModeService.initializeTheme();
  }
}
