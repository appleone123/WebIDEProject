import { Component, OnInit, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { PopControlDirective } from '../pop-control.directive';
import { NzCheckboxComponent } from 'ng-zorro-antd';

@Component({
  selector: 'app-pop-content',
  templateUrl: './pop-content.component.html',
  styleUrls: ['./pop-content.component.css']
})
export class PopContentComponent implements OnInit {
  @ViewChild(PopControlDirective) popControl: PopControlDirective;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
  }
  public changeControl() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(NzCheckboxComponent);
    const viewContainerRef = this.popControl.viewContainerRef;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    // console.log(viewContainerRef);
    componentRef.instance.nzValue = 'test';
  }

}
