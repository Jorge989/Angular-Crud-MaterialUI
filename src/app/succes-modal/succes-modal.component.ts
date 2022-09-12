import { Component, OnInit, Inject } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-succes-modal',
  templateUrl: './succes-modal.component.html',
  styleUrls: ['./succes-modal.component.scss'],
})
export class SuccesModalComponent implements OnInit {
  durationInSeconds = 5;
  constructor() {}

  ngOnInit(): void {}
}
