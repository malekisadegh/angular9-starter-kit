import { Component, OnInit } from '@angular/core';
import { ShortCutMenuService } from './short-cut-menu.service';

interface IMenuItem {
  title: string;
  icon: string;
  link: string;
  home: boolean;
  description: string;
}

@Component({
  selector: 'short-cut-menu',
  templateUrl: './short-cut-menu.component.html',
  styleUrls: ['./short-cut-menu.component.scss'],
})
export class ShortCutMenuComponent implements OnInit {
  menuList: IMenuItem[] = [];

  constructor(private shortCutMenuService: ShortCutMenuService) {}

  ngOnInit(): void {
    this.getMenu();
  }

  getMenu(): void {
    this.shortCutMenuService.speedAccessMenu().subscribe((data: any[]) => {
      this.menuList = data;
    });
  }
}
