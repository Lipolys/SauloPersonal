import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apelo3Component } from './apelo-3.component';

describe('Apelo3Component', () => {
  let component: Apelo3Component;
  let fixture: ComponentFixture<Apelo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apelo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apelo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
