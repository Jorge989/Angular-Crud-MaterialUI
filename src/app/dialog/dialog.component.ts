import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogModalComponent } from '../dialog-modal/dialog-modal/dialog-modal.component';
@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent implements OnInit {
  freshnessList = ['Novo', 'Usado', 'Reformado'];
  isErrormsg = false;
  productForm!: FormGroup;
  actionBtn: string = 'Salvar';
  constructor(
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private formBuilder: FormBuilder,
    private api: ApiService,
    private dialogRef: MatDialogRef<DialogComponent>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
      comment: ['', Validators.required],
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
      if (this.productForm.valid) {
        this.api.postProduct(this.productForm.value).subscribe({
          next: (res) => {
            // alert('Produto adicionado com sucesso!');
            this.dialog.open(DialogModalComponent, {
              data: { sucessMsg: 'Produto adicionado com sucesso.' },
              width: '30%',
            });
            this.productForm.reset;
            this.dialogRef.close('save');
          },
          error: () => {
            this.isErrormsg = true;
            this.dialog.open(DialogModalComponent, {
              data: { errorMsg: 'Erro ao adicionar produto.' },
              width: '30%',
            });
          },
        });
      }
    } else {
      this.updateProduct();
    }
  }
  updateProduct() {
    this.api.putProduct(this.productForm.value, this.editData.id).subscribe({
      next: (res) => {
        // alert('Produto atualizado com sucesso.');
        this.dialog.open(DialogModalComponent, {
          data: { sucessMsg: 'Produto atualizado com sucesso.' },
          width: '30%',
        });
        this.productForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        this.dialog.open(DialogModalComponent, {
          data: { errorMsg: 'Erro ao atualizar produto.' },
          width: '30%',
        });
      },
    });
  }
  closeModal() {
    this.dialogRef.close('close');
  }
}
