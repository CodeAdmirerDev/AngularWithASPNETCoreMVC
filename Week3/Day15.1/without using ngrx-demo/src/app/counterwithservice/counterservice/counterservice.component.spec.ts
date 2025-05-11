import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterserviceComponent } from './counterservice.component';

describe('CounterserviceComponent', () => {
  let component: CounterserviceComponent;
  let fixture: ComponentFixture<CounterserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterserviceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
