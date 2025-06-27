import { Component } from '@angular/core';
import { SidebarComponent } from "../sidebar/sidebar.component";

@Component({
  selector: 'app-landing-arena',
  standalone: true,
  imports: [SidebarComponent],
  templateUrl: './landing-arena.component.html',
  styleUrl: './landing-arena.component.scss'
})
export class LandingArenaComponent {

}
