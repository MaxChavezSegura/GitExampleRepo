import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HomeComponent],
 templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

// Adding a new comment to see in GitHub Repo

  title = 'homes';
}
