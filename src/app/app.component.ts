import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reali-applications';
  linkTabs = [
    {title: 'Dashboard', routerLink: ['dashboard']},
    {title: "Add", routerLink:['edit']}
  ]
}
