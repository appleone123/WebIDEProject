import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSettingTemplateComponent } from './component-setting-template.component';

describe('ComponentSettingTemplateComponent', () => {
  let component: ComponentSettingTemplateComponent;
  let fixture: ComponentFixture<ComponentSettingTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSettingTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSettingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
