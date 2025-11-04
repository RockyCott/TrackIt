import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  // Estados globales
  private states = [
    { name: 'On Hold', color: 'medium', icon: 'help-outline' },
    { name: 'Cancelled', color: 'danger', icon: 'close-outline' },
    { name: 'Pending', color: 'warning', icon: 'time-outline' },
    { name: 'In Progress', color: 'tertiary', icon: 'construct-outline' },
    { name: 'Completed', color: 'success', icon: 'checkmark-done-outline' },
  ];

  getStates() {
    return this.states;
  }

  getStateProperties(status: string) {
    return (
      this.states.find((state) => state.name === status) || {
        color: 'light',
        icon: 'ellipse',
      }
    );
  }
}
