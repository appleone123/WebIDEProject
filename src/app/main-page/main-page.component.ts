import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  title = 'WebIDEProject';
  createDialogVisibility = true;
  isCreating = false;
  formInfo = this.fb.group({
    formCode: [''],
    formName: ['']
  });

  selectedFormType = 'List';
  constructor(
    private fb: FormBuilder,
    private router: Router) { }
  createForm() {
    this.createDialogVisibility = true;
  }
  createCancel() {
    this.createDialogVisibility = false;
  }
  createConfirm() {
    console.log(this.selectedFormType);
    this.createDialogVisibility = false;
    switch (this.selectedFormType) {
      case 'List':
        console.log('navigate');
        this.router.navigate(['designer']);
        break;
      case 'ListCard':
        console.log('navigate');
        this.router.navigate(['designer']);
        break;
      case 'Card':
        console.log('navigate');
        this.router.navigate(['designer']);
        break;
      default:
        break;
    }
  }
  selectChanged(event, formType) {
    this.selectedFormType = formType;
  }
  ngOnInit() {
  }

}
