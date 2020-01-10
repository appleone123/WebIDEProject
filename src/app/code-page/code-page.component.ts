import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {
  @Input() codeLanguage: string;
  editorTheme = 'vs-dark';
  editorOptions: any;
  code = '';
  originalCode = '';
  constructor() {}

  ngOnInit() {
    this.editorOptions = { theme: this.editorTheme, language: this.codeLanguage };
    this.code = 'function x() {\nconsole.log("Hello world!");\n}';
    this.originalCode = 'function x() { // TODO }';
  }
  themeChange(){
    alert(this.editorTheme);
    this.editorOptions = { theme: this.editorTheme, language: this.codeLanguage };
  }

}
