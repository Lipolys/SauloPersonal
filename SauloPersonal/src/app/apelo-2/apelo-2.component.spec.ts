import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apelo2Component } from './apelo-2.component';

describe('Apelo2Component', () => {
  let component: Apelo2Component;
  let fixture: ComponentFixture<Apelo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apelo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apelo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
