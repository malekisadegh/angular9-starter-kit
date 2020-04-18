import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortCutMenuComponent } from './short-cut-menu.component';

describe('ShortCutMenuComponent', () => {
  let component: ShortCutMenuComponent;
  let fixture: ComponentFixture<ShortCutMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ShortCutMenuComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortCutMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
