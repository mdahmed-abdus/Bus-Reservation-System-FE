import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBussesComponent } from './show-busses.component';

describe('ShowBussesComponent', () => {
  let component: ShowBussesComponent;
  let fixture: ComponentFixture<ShowBussesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowBussesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowBussesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
