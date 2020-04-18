import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchRequestComponent } from './branch-request.component';

describe('BranchRequestComponent', () => {
  let component: BranchRequestComponent;
  let fixture: ComponentFixture<BranchRequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BranchRequestComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
