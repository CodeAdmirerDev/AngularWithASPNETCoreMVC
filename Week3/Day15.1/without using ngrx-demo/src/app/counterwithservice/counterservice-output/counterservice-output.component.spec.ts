import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterserviceOutputComponent } from './counterservice-output.component';

describe('CounterserviceOutputComponent', () => {
  let component: CounterserviceOutputComponent;
  let fixture: ComponentFixture<CounterserviceOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterserviceOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterserviceOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
