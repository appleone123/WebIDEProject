import { Component, OnInit, Input } from '@angular/core';
import { ButtonProperties } from 'src/app/components-properties/buttonProperties';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd';

@Component({
  selector: 'app-button-setting',
  templateUrl: './button-setting.component.html',
  styleUrls: ['./button-setting.component.css']
})
export class ButtonSettingComponent implements OnInit {
  @Input() settingInfo: ButtonProperties;
  ButtonSettingGroup: FormGroup;
  @Input() type: string;
  constructor(private formBuilder: FormBuilder, private drawerRef: NzDrawerRef) { }

  ngOnInit() {
    this.ButtonSettingGroup = this.formBuilder.group({
      controlid: this.formBuilder.control('', Validators.required),
      controlclass: this.formBuilder.control(''),
      buttonType: this.formBuilder.control('')
    });
    this.ButtonSettingGroup.get('controlid').setValue(this.settingInfo.id);
    this.ButtonSettingGroup.get('controlclass').setValue(this.settingInfo.className);
    this.ButtonSettingGroup.get('buttonType').setValue(this.settingInfo.nzShape);
  }
  getData() {
    return this.ButtonSettingGroup.value;
  }
  confirm() {
    if (this.ButtonSettingGroup.status === 'VALID') {
      this.drawerRef.close();
    } else {

    }
  }

}
