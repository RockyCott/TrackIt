import { Component, inject } from '@angular/core';
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
  IonImg,
  IonItem,
  IonList,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { createOutline, logOutOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/core/services/auth/auth.service';

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
    IonImg,
  ],
})
export class ProfileComponent {
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

  private authService: AuthService = inject(AuthService);

  constructor() {
    addIcons({ createOutline, logOutOutline });
  }

  editProfile() {
    console.log('Editar perfil (pendiente implementar)');
  }

  logout() {
    this.authService.logout();
  }
}
