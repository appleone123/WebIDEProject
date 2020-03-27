import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {
  @Input() tabType: string;
  @Input() editorOptions: { theme: string, language: string };
  code = '';
  originalCode = '';
  constructor() { }

  ngOnInit() {
    if (!this.editorOptions) {
      this.editorOptions = { theme: 'vs-dark', language: 'typescript' };
    }
    if (this.editorOptions.language === 'typescript' && this.tabType === 'code') {
      this.code = 'function x() {\n\tconsole.log("Hello world!");\n}';
    } else if (this.editorOptions.language === 'typescript' && this.tabType === 'service') {
      this.code = '\nimport { Component, OnInit, Input } from \'@angular/core\';\n' +
      '\nclass formService{\n\thelloWorldService(){\n\t\treturn \'hello world\';\n\t}\n}';
    } else {
      this.code = '';
    }
    this.originalCode = 'function x() { // TODO }';
  }
  getCode() {
    return this.code;
  }

}
