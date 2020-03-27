import { Injectable, ElementRef, Renderer2 } from '@angular/core';
import { ComponentTypeEnum } from './components';
import { NzMessageService, NzButtonComponent } from 'ng-zorro-antd';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(
    private componentType: ComponentTypeEnum,
    private messageService: NzMessageService,
    private renderer: Renderer2) { }

  public createComponent(type: ComponentTypeEnum, event: DragEvent, element: NzButtonComponent) {
    switch (type) {
      case ComponentTypeEnum.Grid:
        this.createButton(event, element);
    }
  }
  private createButton(event: DragEvent, element: NzButtonComponent) {
    event.preventDefault();
    const button = this.renderer.createElement('button');
    let rootNode = this.renderer.parentNode(element.el);
    this.renderer.setAttribute(button, 'nz-button', null);
    this.renderer.addClass(button, 'ant-btn');
    this.renderer.addClass(button, 'ant-btn-default');
    this.renderer.setProperty(button, 'innerHTML', `<span>按钮0</span>`);
    this.renderer.appendChild(rootNode, button);
  }
}
