import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Apelo4Component } from './apelo-4.component';

describe('Apelo4Component', () => {
  let component: Apelo4Component;
  let fixture: ComponentFixture<Apelo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Apelo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Apelo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
