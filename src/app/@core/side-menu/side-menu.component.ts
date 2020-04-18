import { Component, OnInit } from '@angular/core';
import { SideMenuService } from './side-menu.service';

interface IMenuItem {
  title: string;
  icon: string;
  link: string;
  home: boolean;
  children: [];
}

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  menuList: IMenuItem[] = [];

  constructor(private sideMenuService: SideMenuService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.sideMenuService.getMenuData().subscribe((data: any[]) => {
      this.menuList = data;
    });
  }
}
