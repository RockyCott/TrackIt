import { Component, inject, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonRow,
  IonTitle,
  IonToggle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, logOutOutline, moonOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { DarkModeService } from 'src/app/core/services/darkMode/dark-mode.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonToggle,
  ],
})
export class ProfileComponent {
  private authService: AuthService = inject(AuthService);
  private darkModeService: DarkModeService = inject(DarkModeService);

  user = {
    name: 'Ximena Doe',
    email: 'ximena.doe@example.com',
    photo:
      'https://marketplace.canva.com/EAFqNrAJpQs/1/0/1600w/canva-neutral-pink-modern-circle-shape-linkedin-profile-picture-WAhofEY5L1U.jpg',
  };

  stats = {
    projects: 12,
    completedTasks: 34,
  };

  isDarkMode: boolean;

  constructor() {
    addIcons({createOutline,moonOutline,logOutOutline});
    this.isDarkMode = this.darkModeService.darkMode;
  }

  editProfile(): void {
    console.log('Editar perfil (pendiente implementar)');
  }

  toggleDarkMode(event: any): void {
    this.isDarkMode = event.detail.checked;
    this.darkModeService.darkMode = this.isDarkMode;
  }

  logout(): void {
    this.authService.logout();
  }
}
