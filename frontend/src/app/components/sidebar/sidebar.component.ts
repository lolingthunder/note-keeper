import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive} from "@angular/router";
import { MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLinkActive, RouterLink, MatIconModule, MatInputModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  contentList: PathList[] = [
    {
      path: 'notes',
      name: 'Notes',
    },
  ];
  value: string = '';
}

interface PathList {
  path: string;
  name: string;
}
