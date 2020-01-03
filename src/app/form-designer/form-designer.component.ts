import { Component, OnInit, NgZone, TemplateRef, ViewContainerRef, ElementRef, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { NzCheckboxModule, NzCheckboxComponent, NzPopconfirmDirective } from 'ng-zorro-antd';
import { PopControlDirective } from '../pop-control.directive';
import { PopContentComponent } from '../pop-content/pop-content.component';
@Component({
  selector: 'app-form-designer',
  templateUrl: './form-designer.component.html',
  styleUrls: ['./form-designer.component.css']
})
export class FormDesignerComponent implements OnInit {
  @ViewChild(PopContentComponent) popContent: PopContentComponent;
  isCollapsed = false;
  siderWidth = 200;
  nzControls: { controls: string[], group: string }[];
  isMouseDown = false;
  mousePosition = 0;
  siderStartWidth = 0;
  clicked = false;
  topPosition = 0;
  selectControl = '';
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.nzControls = new Array<{ controls: string[], group: string }>();
    this.nzControls.push({
      controls: ['Grid栅格', 'Layout布局'],
      group: '布局'
    });
    this.nzControls.push({
      controls: ['Button按钮', 'Icon图标'],
      group: '通用'
    });
    this.nzControls.push({
      controls: ['Affix固钉', 'Breadcrumb面包屑', 'Dropdown下拉菜单', 'Menu导航菜单', 'PageHeader页头', 'Pagination分页', 'Steps步骤条'],
      group: '导航'
    });
    this.nzControls.push({
      controls: ['Autocomplete自动完成', 'Cascader级联选择',
        'Checkbox多选框', 'Datepicker日期选择框', 'Form表单',
        'Input输入框', 'InputNumber数字输入框', 'Mention提及',
        'Radio单选框', 'Rate评分', 'Select选择器', 'Slider滑动输入条',
        'Switch开关', 'TimePicker时间选择框', 'Transfer穿梭框', 'Treeselect树选择', 'Upload上传'],
      group: '数据录入'
    });
    this.nzControls.push({
      controls: ['Avatar头像', 'Badge徽标数', 'Calendar日历',
        'Card卡片', 'Carousel走马灯', 'Collapse折叠面板', 'Comment评论',
        'Descriptions描述列表', 'Empty空状态', 'List列表', 'Popover气泡卡片',
        'Statistic统计', 'Table表格', 'Tabs标签页', 'Tag标签', 'Timeline时间轴', 'Tooltip文字提示', 'Tree树形控件'],
      group: '数据展示'
    });
    this.nzControls.push({
      controls: ['Alert警告', 'Drawer抽屉', 'Message全局提示', 'Modal对话框',
        'Notification通知提醒框', 'Popconfirm气泡确认框', 'Progress进度条', 'Skeleton加载占位图', 'Spin加载中'],
      group: '反馈'
    });
    this.nzControls.push({
      controls: ['Anchor锚点', 'BackTop回到顶部', 'Divider分割线'],
      group: '其他'
    });

  }
  mouseDown(event: MouseEvent) {
    if (event.button === 0) {
      this.isMouseDown = true;
      this.mousePosition = event.screenX;
      this.siderStartWidth = this.siderWidth;
      console.log(this.mousePosition);
    }
  }
  mouseMove(event: MouseEvent) {
    if (event.button === 0 && this.isMouseDown === true) {
      console.log((event.screenX - this.mousePosition));
      event.stopPropagation();
      event.preventDefault();
      console.log(event.eventPhase);
      this.siderWidth = this.siderStartWidth + (event.screenX - this.mousePosition);
      console.log(this.siderWidth);
    }
  }
  mouseUp(event: MouseEvent) {
    if (event.button === 0) {
      this.isMouseDown = false;
      this.mousePosition = 0;
    }
  }
  controlClick(control) {
    // console.log(popTemplete);
      this.selectControl = control;
  }

}
