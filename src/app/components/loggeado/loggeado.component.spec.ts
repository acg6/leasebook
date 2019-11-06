import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggeadoComponent } from './loggeado.component';

describe('LoggeadoComponent', () => {
  let component: LoggeadoComponent;
  let fixture: ComponentFixture<LoggeadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoggeadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggeadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
