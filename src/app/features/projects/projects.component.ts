import { DatePipe, TitleCasePipe } from '@angular/common';
import { Component, EnvironmentInjector, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { calendarOutline, filterOutline, peopleOutline } from 'ionicons/icons';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
  standalone: true,
  imports: [
    IonHeader,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonCardSubtitle,
    IonToolbar,
    IonTitle,
    IonIcon,
    EllipsisPipe,
    IonRow,
    IonCol,
    DatePipe,
    TitleCasePipe,
    RouterLink,
  ],
})
export class ProjectsComponent {
  // signal
  projects = [
    {
      id: 1,
      title: 'Construcción de un puente',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de un puente en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      endDate: '2021-12-01',
      memberCount: 5,
    },
    {
      id: 2,
      title: 'Construcción de un edificio',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de un edificio en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      memberCount: 3,
    },
    {
      id: 3,
      title: 'Construcción de una casa',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de una casa en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      endDate: '2021-12-01',
      memberCount: 2,
    },
    {
      id: 4,
      title: 'Gestión de residuos',
      subtitle: 'Proyecto de medio ambiente',
      description:
        'Gestión de residuos en la ciudad de Bucaramanga, Colombia, Argentina. Este proyecto tiene como objetivo mejorar la calidad de vida de los habitantes de la ciudad.',
      memberCount: 4,
    },
    {
      id: 5,
      title: 'Construcción de un puente',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de un puente en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      memberCount: 5,
    },
    {
      id: 6,
      title: 'Construcción de un edificio',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de un edificio en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      memberCount: 3,
    },
    {
      id: 7,
      title: 'Construcción de una casa',
      subtitle: 'Proyecto de infraestructura',
      description:
        'Construcción de una casa en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      memberCount: 2,
    },
    {
      id: 8,
      title: 'Gestión de residuos',
      subtitle: 'Proyecto de medio ambiente',
      description: 'Gestión de residuos en la ciudad de Bucaramanga, Colombia',
      startDate: '2021-10-01',
      memberCount: 1,
    },
  ];
  public environmentInjector = inject(EnvironmentInjector);
  private title: Title = inject(Title);

  constructor() {
    addIcons({ filterOutline, calendarOutline, peopleOutline });
    this.title.setTitle('Projects');
  }
}
