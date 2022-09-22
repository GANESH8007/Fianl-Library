import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegesterUserComponent } from './regester-user.component';

describe('RegesterUserComponent', () => {
  let component: RegesterUserComponent;
  let fixture: ComponentFixture<RegesterUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegesterUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegesterUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
