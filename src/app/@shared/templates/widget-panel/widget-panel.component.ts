import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'widget-panel',
  templateUrl: './widget-panel.component.html',
  styleUrls: ['./widget-panel.component.scss'],
})
export class WidgetPanelComponent implements OnInit {
  @Input() icon: string;
  @Input() title: string;

  constructor() {}

  ngOnInit(): void {}
}
