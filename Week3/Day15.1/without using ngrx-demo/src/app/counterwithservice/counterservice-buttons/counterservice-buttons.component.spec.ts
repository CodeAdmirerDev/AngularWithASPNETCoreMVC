import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterserviceButtonsComponent } from './counterservice-buttons.component';

describe('CounterserviceButtonsComponent', () => {
  let component: CounterserviceButtonsComponent;
  let fixture: ComponentFixture<CounterserviceButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterserviceButtonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterserviceButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
