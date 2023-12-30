import { Component, EventEmitter, Output, Input } from '@angular/core';

export interface Carpeta {
  nombre: string;
  id: number;
  color_pred: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarOpen: boolean = false;


  @Output() toggle = new EventEmitter();

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
    this.toggle.emit(this.sidebarOpen);
  }
}
