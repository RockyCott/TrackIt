import { Component, inject } from '@angular/core';
import {
  IonBadge,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonChip,
  IonContent,
  IonHeader,
  IonIcon,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  checkmarkDoneOutline,
  constructOutline,
  timeOutline,
} from 'ionicons/icons';
import { State } from 'src/app/core/enums/state.enum';
import { StateService } from 'src/app/core/services/state/state.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
  standalone: true,
  imports: [
    IonCardContent,
    IonCardTitle,
    IonCardSubtitle,
    IonCardHeader,
    IonCard,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonChip,
    IonLabel,
    IonBadge,
    IonIcon,
  ],
})
export class TasksComponent {
  private stateService: StateService = inject(StateService);

  // Mock de las tareas
  tasks = [
    {
      id: 1,
      title: 'Prepare project report',
      status: 'Pending',
      project: 'Project Alpha',
      priority: 'High',
    },
    {
      id: 2,
      title: 'Design UI prototype',
      status: 'In Progress',
      project: 'Project Beta',
      priority: 'Medium',
    },
    {
      id: 3,
      title: 'Fix critical bugs',
      status: 'Completed',
      project: 'Project Alpha',
      priority: 'High',
    },
    {
      id: 4,
      title: 'Test new feature',
      status: 'Pending',
      project: 'Project Gamma',
      priority: 'Low',
    },
  ];

  // Estados posibles para filtros
  statusFilters = [
    State.All,
    ...this.stateService.getStates().map((state) => state.name),
  ];

  // Filtros activos
  activeStatusFilter = State.All;

  constructor() {
    addIcons({
      timeOutline,
      constructOutline,
      checkmarkDoneOutline,
    });
  }

  get filteredTasks() {
    if (this.activeStatusFilter === State.All) return this.tasks;

    return this.tasks.filter((task) => task.status === this.activeStatusFilter);
  }

  setFilter(status: string) {
    this.activeStatusFilter = status as State;
  }

  getBadgeColor(status: string): string {
    return this.stateService.getStateProperties(status).color;
  }

  getStatusIcon(status: string): string {
    return this.stateService.getStateProperties(status).icon;
  }

  changeTaskStatus(task: any) {
    console.log('Change status for:', task);
    // Aquí se abriría un modal o un menú para cambiar el estado
  }
}
