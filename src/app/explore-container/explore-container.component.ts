import { Component, Input } from '@angular/core';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent, IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonContent, 
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
  ],
})
export class ExploreContainerComponent {
  @Input() name?: string;
  projects = [
    {
      title: 'Construcción de un puente',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de un puente en la ciudad de Córdoba',
    },
    {
      title: 'Construcción de un edificio',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de un edificio en la ciudad de Córdoba',
    },
    {
      title: 'Construcción de una casa',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de una casa en la ciudad de Córdoba',
    },
    {
      title: 'Gestión de residuos',
      subtitle: 'Proyecto de medio ambiente',
      description: 'Gestión de residuos en la ciudad de Córdoba',
    },
    {
      title: 'Construcción de un puente',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de un puente en la ciudad de Córdoba',
    },
    {
      title: 'Construcción de un edificio',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de un edificio en la ciudad de Córdoba',
    },
    {
      title: 'Construcción de una casa',
      subtitle: 'Proyecto de infraestructura',
      description: 'Construcción de una casa en la ciudad de Córdoba',
    },
    {
      title: 'Gestión de residuos',
      subtitle: 'Proyecto de medio ambiente',
      description: 'Gestión de residuos en la ciudad de Córdoba',
    },
  ];
}
