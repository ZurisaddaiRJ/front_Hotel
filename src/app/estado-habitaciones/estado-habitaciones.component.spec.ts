import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoHabitacionesComponent } from './estado-habitaciones.component';

describe('EstadoHabitacionesComponent', () => {
  let component: EstadoHabitacionesComponent;
  let fixture: ComponentFixture<EstadoHabitacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadoHabitacionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstadoHabitacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
