import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopContentComponent } from './pop-content.component';

describe('PopContentComponent', () => {
  let component: PopContentComponent;
  let fixture: ComponentFixture<PopContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
