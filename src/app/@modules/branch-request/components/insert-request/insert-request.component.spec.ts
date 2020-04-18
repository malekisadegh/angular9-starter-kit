import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertRequestComponent } from './insert-request.component';

describe('InsertRequestComponent', () => {
  let component: InsertRequestComponent;
  let fixture: ComponentFixture<InsertRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [InsertRequestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
