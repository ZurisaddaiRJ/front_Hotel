import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivosHabiComponent } from './dispositivos-habi.component';

describe('DispositivosHabiComponent', () => {
  let component: DispositivosHabiComponent;
  let fixture: ComponentFixture<DispositivosHabiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivosHabiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispositivosHabiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
