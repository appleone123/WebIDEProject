import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { NzNotificationService, NzMessageService, NzButtonComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-design-panel',
  templateUrl: './design-panel.component.html',
  styleUrls: ['./design-panel.component.css']
})
export class DesignPanelComponent implements OnInit {

  constructor(
    private messageService: NzMessageService,
    private renderer: Renderer2) { }

  ngOnInit() {
  }
  onDrop(event: DragEvent, container: ElementRef) {
    event.preventDefault();
    const control = event.dataTransfer.getData('Text');
    if (control !== 'Layout布局') {
      this.messageService.warning('请先添加布局容器');
    }
    let rootNode = this.renderer.parentNode(container);
    this.renderer.removeChild(rootNode, container);
    let newElement = this.renderer.createElement('button');
    this.renderer.setProperty(newElement, 'nzType', 'primary');
    this.renderer.appendChild(newElement, this.renderer.createText('click me'));
    this.renderer.appendChild(rootNode, newElement);
  }
  dragover(event: DragEvent) {
    event.preventDefault();
  }

}
