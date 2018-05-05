import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoraCupResultComponent } from './mora-cup-result.component';

describe('MoraCupResultComponent', () => {
  let component: MoraCupResultComponent;
  let fixture: ComponentFixture<MoraCupResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoraCupResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoraCupResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
