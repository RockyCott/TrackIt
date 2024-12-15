import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {
  private readonly DARK_MODE_KEY = 'darkMode';

  initializeTheme(): void {
    this.darkModeLocalStorage = this.darkMode;
    this.ionPaletteDark = this.darkMode;
  }

  get darkMode(): boolean {
    return localStorage.getItem(this.DARK_MODE_KEY) === 'true';
  }

  set darkMode(value: boolean) {
    this.darkModeLocalStorage = value;
    this.ionPaletteDark = value;
  }

  set darkModeLocalStorage(value: boolean) {
    localStorage.setItem(this.DARK_MODE_KEY, String(value));
  }

  set ionPaletteDark(value: boolean) {
    document.documentElement.classList.toggle('ion-palette-dark', value);
  }
}
