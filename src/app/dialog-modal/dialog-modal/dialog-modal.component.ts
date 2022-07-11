import { Component, OnInit, Inject } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-modal',
  templateUrl: './dialog-modal.component.html',
  styleUrls: ['./dialog-modal.component.scss'],
  template: 'passed in {{ data.sucessMsg }},{{data.errorMsg}}',
})
export class DialogModalComponent implements OnInit {
  sucessMsg: string = '';
  errorMsg: string = '';
  isRequestSucces: boolean = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public success: { sucessMsg: string },
    @Inject(MAT_DIALOG_DATA) public error: { errorMsg: string }
  ) {
    this.sucessMsg = success.sucessMsg;
    this.errorMsg = error.errorMsg;
  }

  ngAfterViewInit() {}
  ngOnInit(): void {
    if (this.sucessMsg) {
      this.isRequestSucces = true;
    } else {
      this.isRequestSucces = false;
    }
  }
}
