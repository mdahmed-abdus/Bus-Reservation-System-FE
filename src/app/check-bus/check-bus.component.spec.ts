import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckBusComponent } from './check-bus.component';

describe('CheckBusComponent', () => {
  let component: CheckBusComponent;
  let fixture: ComponentFixture<CheckBusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckBusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckBusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
