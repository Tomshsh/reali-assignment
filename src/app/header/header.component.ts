import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, RouterLink } from '@angular/router';

interface LinkTab{
  title: string
  routerLink: string[],
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() title!: string
  @Input() linkTabs!: LinkTab[]
  activeTab!: string

  constructor() { }

  ngOnInit(): void {
  }

  activateTab(tab: LinkTab){
    this.activeTab = tab.title
  }

}
