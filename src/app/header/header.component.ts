import { Component, Input, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators'
import { ActivatedRoute, ActivatedRouteSnapshot, NavigationEnd, Router, RouterLink } from '@angular/router';

interface LinkTab {
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

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(e => (e instanceof NavigationEnd))
    ).subscribe(e => {
      if (e instanceof NavigationEnd) {
        const path = e.url.split("/")[1]
        this.activeTab = this.linkTabs.find(l => l.routerLink.toString().includes(path))?.title || ""
      }
    })
  }

  activateTab(tab: LinkTab) {
  }

}
