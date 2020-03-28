import { Component, OnInit, Input } from '@angular/core';
import { ComponentTypeEnum } from '../components';

@Component({
  selector: 'app-component-setting-template',
  templateUrl: './component-setting-template.component.html',
  styleUrls: ['./component-setting-template.component.css']
})
export class ComponentSettingTemplateComponent implements OnInit {
  @Input() type: ComponentTypeEnum;
  @Input() props: any;
  value = '';
  constructor() { }

  ngOnInit() {
    if (this.type === ComponentTypeEnum.Button) {
      this.value = this.props.id;
    }
  }

}
