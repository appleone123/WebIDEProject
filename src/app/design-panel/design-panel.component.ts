import {
  Component, OnInit, ElementRef, Renderer2,
  ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ComponentFactory
} from '@angular/core';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { NzNotificationService, NzMessageService, NzButtonComponent } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser';
import { ComponentTypeEnum } from '../components';
import { ComponentService } from '../component.service';

@Component({
  selector: 'app-design-panel',
  templateUrl: './design-panel.component.html',
  styleUrls: ['./design-panel.component.css']
})
export class DesignPanelComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;
  // @ViewChild('empty', { read: ElementRef }) empty: ElementRef;
  // @ViewChild('button', { read: ElementRef }) button: ElementRef;
  htmlData: any;
  maxTabIndex = 0;
  empty = true;
  constructor(
    private messageService: NzMessageService,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private sanitizer: DomSanitizer,
    private overlay: Overlay,
    private componentService: ComponentService) { }

  ngOnInit() {
  }
  onDrop(event: DragEvent, container: NzButtonComponent) {
    event.preventDefault();
    const control = event.dataTransfer.getData('Text');
    if (control !== 'Layout布局') {
      this.messageService.warning('请先添加布局容器');
    }
    switch (control) {
      case ComponentTypeEnum.Grid:
        this.componentService.createComponent(ComponentTypeEnum.Grid, event, container);
        break;

      default:
        break;
    }
    // this.container.clear();
    // this.renderer.removeChild(this.container.nativeElement, this.empty.nativeElement);
    // const button = this.renderer.createElement('button');
    // this.renderer.addClass(button, 'ant-btn');
    // this.renderer.addClass(button, 'ant-btn-default');
    // this.renderer.setProperty(button, 'nz-button', null);
    // this.renderer.appendChild(this.container.nativeElement, button);
    // let rootNode = this.renderer.parentNode(container.el);
    // this.renderer.removeChild(rootNode, container);
    // let newElement = this.renderer.createElement('button');
    // this.renderer.setProperty(newElement, 'nzType', 'primary');
    // this.renderer.appendChild(newElement, this.renderer.createText('click me'));
    // this.renderer.setAttribute(button, 'nz-button', null);
    // this.renderer.addClass(button, 'ant-btn');
    // this.renderer.addClass(button, 'ant-btn-default');
    // this.renderer.setProperty(button, 'innerHTML', `<span>按钮` + this.maxTabIndex + `</span>`);
    // this.renderer.appendChild(rootNode, button);
    // let overRef = this.overlay.create();
    // let component = overRef.attach(new ComponentPortal(NzButtonComponent));

    // let span = component.instance.el.querySelector('span');
    // this.renderer.setProperty(span, 'innerHTML', '按钮' + this.maxTabIndex);
    // if (this.empty) { this.empty = false; }
    // this.container.insert(component.instance.contentElement.nativeElement, 0);
    // console.log(this.container);
    // work
    // const factory: ComponentFactory<NzButtonComponent> = this.resolver.resolveComponentFactory(NzButtonComponent);
    // const componentRef = this.container.createComponent(factory, 0);
    // this.renderer.setAttribute(componentRef.instance.elementRef.nativeElement, 'tabIndex', this.maxTabIndex + 1 + '');
    // this.maxTabIndex = this.maxTabIndex + 1;
    // let span = componentRef.instance.elementRef.nativeElement.querySelector('span');
    // this.renderer.setProperty(span, 'innerHTML', '按钮'+this.maxTabIndex);
    // this.renderer.listen(componentRef.instance.elementRef.nativeElement, 'focus', ($event) => { this.onFocus($event, this); });
    // this.renderer.listen(componentRef.instance.elementRef.nativeElement, 'blur', ($event) => { this.onBlur($event, this); });
    // this.renderer.listen(componentRef.instance.elementRef.nativeElement, 'click', this.click);
    // if (this.empty) { this.empty = false; }
    // work-end
    // const text = this.renderer.createText('测试按钮');
    // this.renderer.removeChild(componentRef.instance.elementRef.nativeElement, 'span');
    // const span = this.renderer.createElement('span');
    // this.renderer.appendChild(span, text);
    // this.renderer.appendChild(componentRef.instance.elementRef.nativeElement, span);
    // // this.renderer.appendChild(componentRef.instance.elementRef.nativeElement, text);
    // this.renderer.setProperty(componentRef, 'value', 'anniu');
    // console.log(componentRef);

  }
  onFocus(event: FocusEvent, self) {
    event.preventDefault();
    // self.renderer.addClass(event.currentTarget, 'focus');
  }
  onBlur(event: FocusEvent, self) {
    event.preventDefault();
    // self.renderer.removeClass(event.currentTarget, 'focus');
  }
  click(event) {
    event.preventDefault();
    alert('aaa');
  }
  dragover(event: DragEvent) {
    event.preventDefault();
  }

}
