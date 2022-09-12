import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from './services/api.service';
import { DialogModalComponent } from './dialog-modal/dialog-modal/dialog-modal.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ErrorLoadModalComponent } from './Error/error-load-modal/error-load-modal.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  durationInSeconds = 5;
  title = 'AngularCrud';
  displayedColumns: string[] = [
    'productName',
    'category',
    'date',
    'freshness',
    'price',
    'comment',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(
    private dialog: MatDialog,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {}

  // ngAfterContentChecked(): void {
  //   //Called after every check of the component's or directive's content.
  //   //Add 'implements AfterContentChecked' to the class.
  //   // this.getAllProducts();
  // }
  // ngOnInit(): void {
  //   this.getAllProducts();
  // }
  // openDialog() {
  //   this.dialog
  //     .open(DialogComponent, {
  //       width: '30%',
  //     })
  //     .afterClosed()
  //     .subscribe((val) => {
  //       if (val === 'save') {
  //         this.getAllProducts();
  //       }
  //     });
  // }
  // getAllProducts() {
  //   this.api.getProduct().subscribe({
  //     next: (res) => {
  //       this.dataSource = new MatTableDataSource(res.data.product);
  //       this.dataSource.paginator = this.paginator;
  //       this.dataSource.sort = this.sort;
  //     },
  //     error: (err) => {
  //       // this.dialog.open(DialogModalComponent, {
  //       //   data: { errorMsg: 'Erro ao carregar produtos.' },
  //       //   width: '30%',
  //       // });
  //       this._snackBar.openFromComponent(ErrorLoadModalComponent, {
  //         duration: this.durationInSeconds * 1000,
  //       });
  //     },
  //   });
  // }

  // editProduct(row: any) {
  //   this.dialog
  //     .open(DialogComponent, {
  //       width: '30%',
  //       data: row,
  //     })
  //     .afterClosed()
  //     .subscribe((val) => {
  //       if (val === 'update') {
  //         this.getAllProducts();
  //       }
  //     });
  // }
  // deleteProduct(id: number) {
  //   this.api.deleteProduct(id).subscribe({
  //     next: (res) => {
  //       // alert('Produto deletado com sucesso.');
  //       // this.dialog.open(DialogModalComponent, {
  //       //   data: { sucessMsg: 'Produto deletado com sucesso.' },
  //       //   width: '30%',
  //       // });
  //       this._snackBar.openFromComponent(DeleteModalComponent, {
  //         duration: this.durationInSeconds * 1000,
  //       });
  //       this.getAllProducts();
  //     },
  //     error: () => {
  //       this.dialog.open(DialogModalComponent, {
  //         data: { errorMsg: 'Erro ao deletar produto.' },
  //         width: '30%',
  //       });
  //     },
  //   });
  // }
  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
  ngOnInit(): void {}
}
