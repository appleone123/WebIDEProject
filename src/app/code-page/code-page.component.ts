import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-code-page',
  templateUrl: './code-page.component.html',
  styleUrls: ['./code-page.component.css']
})
export class CodePageComponent implements OnInit {
  editorOptions: any;
  code = '';
  originalCode = '';
  constructor() {
    this.editorOptions = { theme: 'vs-dark', language: 'javascript' };
    this.code = 'function x() {\nconsole.log("Hello world!");\n}';
    this.originalCode = 'function x() { // TODO }';
  }

  ngOnInit() {
  }

}
