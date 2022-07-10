import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnNgIfComponent } from './learn-ng-if.component';

describe('LearnNgIfComponent', () => {
  let component: LearnNgIfComponent;
  let fixture: ComponentFixture<LearnNgIfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnNgIfComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnNgIfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
