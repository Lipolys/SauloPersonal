import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apelo1Component } from './apelo-1.component';

describe('Apelo1Component', () => {
  let component: Apelo1Component;
  let fixture: ComponentFixture<Apelo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apelo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apelo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
