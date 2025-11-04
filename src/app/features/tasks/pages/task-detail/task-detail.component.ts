import {
  IonHeader,
  IonCardContent,
  IonCard,
  IonGrid,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonContent,
  IonIcon,
  IonCardHeader,
  IonCardTitle,
  IonList,
  IonItem,
  IonCheckbox,
  IonFooter,
  IonRow,
  IonCol,
  IonLabel,
  IonCardSubtitle,
} from '@ionic/angular/standalone';
import { Component, OnInit } from '@angular/core';
import { StatusBadgeComponent } from 'src/app/shared/components/status-badge/status-badge.component';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { addIcons } from 'ionicons';
import {
  calendarOutline,
  imageOutline,
  documentOutline,
  downloadOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.scss'],
  standalone: true,
  imports: [
    IonButton,
    IonGrid,
    IonCard,
    IonCardContent,
    IonHeader,
    StatusBadgeComponent,
    RouterLink,
    IonCard,
    IonCardContent,
    IonGrid,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonTitle,
    IonContent,
    IonIcon,
    IonCardHeader,
    IonCardTitle,
    IonList,
    IonItem,
    IonCheckbox,
    IonFooter,
    IonRow,
    IonCol,
    IonLabel,
    FormsModule,
    DatePipe,
    IonCardSubtitle,
  ],
})
export class TaskDetailComponent {
  task = {
    id: '1',
    title: 'Fix Machine Issue',
    description: 'Fix the broken conveyor belt in factory line 3.',
    status: 'In Progress',
    dueDate: '2024-12-20',
    image: null, // Replace with a URL if available
    projectId: '2',
    projectName: 'Maintenance Operations',
    projectDescription: 'Managing all maintenance tasks across facilities.',
    attachments: [
      { name: 'Instruction Manual.pdf', url: '#' },
      { name: 'Checklist.xlsx', url: '#' },
    ],
    notes: 'Ensure all safety protocols are followed during repair.',
    assignees: [
      { id: '1', name: 'Alice', avatar: 'https://i.pravatar.cc/50?img=1' },
      { id: '2', name: 'Bob', avatar: 'https://i.pravatar.cc/50?img=2' },
    ],
  };

  constructor(private router: Router) {
    addIcons({
      imageOutline,
      calendarOutline,
      documentOutline,
      downloadOutline,
    });
  }

  goToProject(projectId: string) {
    this.router.navigate(['/dashboard/projects', projectId]);
  }

  markAsCompleted() {
    console.log('Task marked as completed!');
  }

  editTask() {
    console.log('Edit task clicked');
  }

  deleteTask() {
    console.log('Task deleted');
  }

  downloadFile(file: any) {
    console.log(`Downloading file: ${file.name}`);
  }
}
