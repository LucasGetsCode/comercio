import { Component } from '@angular/core';
// import assets from "../../assets"

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent {
  fotos: string[] = ["assets/pizza0.jpg", "assets/pizza1.webp", "assets/pizza2.jpg", "assets/pizza3.webp"]
}
