import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgZorroAntdModule,
  NZ_I18N, zh_CN,
  NzCheckboxModule,
  NzCheckboxComponent,
  NzButtonComponent,
  NzButtonModule
} from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormDesignerComponent } from './form-designer/form-designer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { PopControlDirective } from './pop-control.directive';
import { PopContentComponent } from './pop-content/pop-content.component';
import { CodePageComponent } from './code-page/code-page.component';
import { MonacoEditorModule } from '@materia-ui/ngx-monaco-editor';
import { DesignPanelComponent } from './design-panel/design-panel.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ComponentService } from './component.service';
import { ComponentSettingTemplateComponent } from './component-setting-template/component-setting-template.component';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent,
    FormDesignerComponent,
    MainPageComponent,
    PopControlDirective,
    PopContentComponent,
    CodePageComponent,
    DesignPanelComponent,
    ComponentSettingTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzCheckboxModule,
    MonacoEditorModule,
    DragDropModule
  ],
  entryComponents: [NzCheckboxComponent, PopContentComponent, NzButtonComponent, ComponentSettingTemplateComponent],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }, ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
