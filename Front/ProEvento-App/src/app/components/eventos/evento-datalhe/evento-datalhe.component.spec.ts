import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDatalheComponent } from './evento-datalhe.component';

describe('EventoDatalheComponent', () => {
  let component: EventoDatalheComponent;
  let fixture: ComponentFixture<EventoDatalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventoDatalheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventoDatalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
