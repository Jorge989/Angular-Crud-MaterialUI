import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal/dialog-modal.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { SuccesModalComponent } from '../succes-modal/succes-modal.component';
import { CreateSuccessModalComponent } from '../create-success-modal/create-success-modal.component';
import { ErrorUpdateModalComponent } from '../Error/error-update-modal/error-update-modal.component';
import { ErrorCreateModalComponent } from '../Error/error-create-modal/error-create-modal.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  durationInSeconds = 5;
  freshnessList = ['Novo', 'Usado', 'Reformado'];
  isErrormsg = false;
  productForm!: FormGroup;
  actionBtn: string = 'Salvar';
  isSpinner = false;
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      comment: [''],
    });
    if (this.editData) {
      this.actionBtn = 'Atualizar';
      this.productForm.controls['productName'].setValue(
        this.editData.productName
      );
      this.productForm.controls['category'].setValue(this.editData.category);
      this.productForm.controls['freshness'].setValue(this.editData.freshness);
      this.productForm.controls['price'].setValue(this.editData.price);
      this.productForm.controls['date'].setValue(this.editData.date);
      this.productForm.controls['comment'].setValue(this.editData.comment);
    }
  }
  addProduct() {
    if (!this.editData) {
      this.api.postProduct(this.productForm.value).subscribe({
        next: (res) => {
          this.isSpinner = true;
          // alert('Produto adicionado com sucesso!');
          this.isSpinner = false;
          this._snackBar.openFromComponent(CreateSuccessModalComponent, {
            duration: this.durationInSeconds * 1000,
          });
          this.productForm.reset;

          setTimeout(() => {
            this.dialogRef.close('close');
          }, 2000);
          setTimeout(() => {
            this.router.navigate(['/products']).then(() => {
              window.location.reload();
            });
          }, 2000);
        },
        error: () => {
          this.isErrormsg = true;
          this._snackBar.openFromComponent(ErrorCreateModalComponent, {
            duration: this.durationInSeconds * 1000,
          });
        },
      });
    } else {
      this.updateProduct();
    }
  }
  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData._id).subscribe({
      next: (res) => {
        console.log(res);
        // alert('Produto atualizado com sucesso.');
        // this.dialog.open(DialogModalComponent, {
        //   data: { sucessMsg: 'Produto atualizado com sucesso.' },
        //   width: '30%',
        // });
        this._snackBar.openFromComponent(SuccesModalComponent, {
          duration: this.durationInSeconds * 1000,
        });
        this.productForm.reset();
        this.dialogRef.close('update');
        // setTimeout(() => {
        //   this.router.navigate(['/products']).then(() => {
        //     window.location.reload();
        //   });
        // }, 1000);
      },
      error: () => {
        this._snackBar.openFromComponent(ErrorUpdateModalComponent, {
          duration: this.durationInSeconds * 1000,
        });
      },
    });
  }
  closeModal() {
    this.dialogRef.close('close');
  }
}
