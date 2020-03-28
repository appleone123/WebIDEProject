import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { ComponentTypeEnum } from './components';
import { NzMessageService, NzButtonComponent, NzDrawerService, NzDrawerRef } from 'ng-zorro-antd';
import { ComponentSettingTemplateComponent } from './component-setting-template/component-setting-template.component';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  constructor(
    private messageService: NzMessageService,
    private drawerService: NzDrawerService) { }
  private maxTabIndex = 0;
  private settingPanelOpenStatus = false;
  private settingPanelRef: NzDrawerRef;
  createComponent(type: ComponentTypeEnum, event: DragEvent, renderer: Renderer2) {
    switch (type) {
      case ComponentTypeEnum.Grid:
        this.createButton(event, renderer);
    }
  }
  private createButton(event: DragEvent, renderer: Renderer2) {
    event.preventDefault();
    const button = renderer.createElement('button');
    // let rootNode = renderer.parentNode(element.el);
    renderer.setAttribute(button, 'nz-button', null);
    renderer.setAttribute(button, 'id', 'button' + this.maxTabIndex);
    // 此处用函数表达式是因为这种事件注册方式会丢失this，用此方式显式传递this到函数中一边访问此处作用域中的this里面的内容
    renderer.listen(button, 'click', ($event) => { this.onClick($event, this, button); });
    renderer.addClass(button, 'ant-btn');
    renderer.addClass(button, 'ant-btn-default');
    renderer.setProperty(button, 'innerHTML', `<span>按钮0</span>`);
    renderer.appendChild(event.currentTarget, button);
    this.maxTabIndex = this.maxTabIndex + 1;
  }

  private onClick(event: Event, self, element) {
    // alert(111);
    // if (!self.settingPanelOpenStatus) {
    console.log(element.id);
    event.preventDefault();
    // self.renderer.addClass(event.currentTarget, 'focus');
    const settingPanelRef = self.drawerService.create({
      nzTitle: '属性设置',
      nzContent: ComponentSettingTemplateComponent,
      nzContentParams: { type: ComponentTypeEnum.Button, props: { id: element.id } }
    });
    // const currentTarget = event.currentTarget;
    settingPanelRef.afterClose.subscribe((data) => {
      // self.settingPanelOpenStatus = false;
      // const focusEvent = new FocusEvent('blur');
      // const result = currentTarget.dispatchEvent(focusEvent);
      // console.log(result);
    });
    // self.settingPanelOpenStatus = true;
    // }
  }
}
