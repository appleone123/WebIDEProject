import { Component, OnInit, ElementRef, Renderer2,
  ViewChild, ViewContainerRef, ComponentFactoryResolver,
  ComponentFactory } from '@angular/core';
import { NzNotificationService, NzMessageService, NzButtonComponent } from 'ng-zorro-antd';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-design-panel',
  templateUrl: './design-panel.component.html',
  styleUrls: ['./design-panel.component.css']
})
export class DesignPanelComponent implements OnInit {
  @ViewChild('container', { read: ViewContainerRef }) container;
  @ViewChild('empty', { read: ElementRef }) empty: ElementRef;
  @ViewChild('button', { read: ElementRef }) button: ElementRef;
  htmlData: any;
  constructor(
    private messageService: NzMessageService,
    private renderer: Renderer2,
    private resolver: ComponentFactoryResolver,
    private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }
  onDrop(event: DragEvent, container: ElementRef) {
    event.preventDefault();
    const control = event.dataTransfer.getData('Text');
    if (control !== 'Layout布局') {
      this.messageService.warning('请先添加布局容器');
    }
    this.htmlData = this.sanitizer.bypassSecurityTrustHtml('<button nz-button (click)="click()">保存</button>');
    // this.renderer.removeChild(this.container.nativeElement, this.empty.nativeElement);
    // let button = this.renderer.createElement('button');
    // this.renderer.addClass(button, 'ant-btn');
    // this.renderer.addClass(button, 'ant-btn-default');
    // this.renderer.setProperty(button, 'nz-button', null);
    // this.renderer.appendChild(this.container.nativeElement, button);
    // let rootNode = this.renderer.parentNode(container);
    // this.renderer.removeChild(rootNode, container);
    // let newElement = this.renderer.createElement('button');
    // this.renderer.setProperty(newElement, 'nzType', 'primary');
    // this.renderer.appendChild(newElement, this.renderer.createText('click me'));
    // this.renderer.appendChild(rootNode, newElement);

    // console.log(this.container);
    // const factory: ComponentFactory<NzButtonComponent> = this.resolver.resolveComponentFactory(NzButtonComponent);
    // const componentRef = this.container.createComponent(factory);

    // const text = this.renderer.createText('测试按钮');
    // this.renderer.removeChild(componentRef.instance.elementRef.nativeElement, 'span');
    // const span = this.renderer.createElement('span');
    // this.renderer.appendChild(span, text);
    // this.renderer.appendChild(componentRef.instance.elementRef.nativeElement, span);
    // // this.renderer.appendChild(componentRef.instance.elementRef.nativeElement, text);
    // this.renderer.setProperty(componentRef, 'value', 'anniu');
    // console.log(componentRef);

  }
  click() {
    alert('aaa');
  }
  dragover(event: DragEvent) {
    event.preventDefault();
  }

}
