import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import {
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonNote,
  IonProgressBar,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { addCircleOutline } from 'ionicons/icons';
import { StatusBadgeComponent } from 'src/app/shared/components/status-badge/status-badge.component';
import { EllipsisPipe } from 'src/app/shared/pipes/ellipsis.pipe';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss'],
  standalone: true,
  imports: [
    IonNote,
    IonItem,
    IonHeader,
    IonToolbar,
    IonChip,
    IonCardContent,
    IonCard,
    IonCardHeader,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonCardTitle,
    IonCardSubtitle,
    IonProgressBar,
    IonList,
    IonLabel,
    RouterLink,
    DatePipe,
    StatusBadgeComponent,
    EllipsisPipe,
  ],
})
export class ProjectDetailComponent implements OnInit {
  project: any;
  projectTasks: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {
    addIcons({ addCircleOutline });
  }

  ngOnInit() {
    addIcons({
      addCircleOutline,
    });
    const projectId = this.route.snapshot.paramMap.get('id');
    this.loadProject(projectId);
  }

  loadProject(projectId: string | null) {
    // Lógica para cargar la información del proyecto desde el servicio
    this.project = {
      id: projectId,
      name: 'New Office Construction',
      description: 'Building a new office for the team.',
      status: 'Active',
      progress: 65,
      startDate: '2023-01-01',
      endDate: '2023-12-31',
      team: ['Alice', 'Bob', 'Charlie'],
    };

    this.projectTasks = [
      {
        id: '1',
        name: 'Task 1',
        description: 'Define requirements.',
        status: 'Completed',
      },
      {
        id: '2',
        name: 'Task 2',
        description: 'Initial design.',
        status: 'In Progress',
      },
      {
        id: '3',
        name: 'Task 3',
        description: 'Implementation.',
        status: 'Pending',
      },
    ];
  }

  editProject() {
    // Navegar a la página de edición del proyecto
    this.router.navigate(['/tabs/projects/edit', this.project.id]);
  }

  closeProject() {
    // Lógica para cerrar el proyecto
    console.log('Project closed!');
  }

  addTask() {
    // Navegar a la página para agregar una tarea
    this.router.navigate(['/tabs/tasks/new', this.project.id]);
  }
}
