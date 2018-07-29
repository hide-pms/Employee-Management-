import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadinSComponent } from './loadin-s.component';

describe('LoadinSComponent', () => {
  let component: LoadinSComponent;
  let fixture: ComponentFixture<LoadinSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadinSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadinSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
