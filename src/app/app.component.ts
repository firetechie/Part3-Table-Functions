import { Component, OnInit, ViewChild } from '@angular/core';
import { Products } from './Products';
import { ProductService } from './product.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Part3-Table-Functions';
  displayedColumns: string[] = ['name', 'price', 'category'];
  dataSource: any;
  intervalId: string | any;

  @ViewChild(MatSort) sort: MatSort | any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.dataSource = new MatTableDataSource<Products[]>(res);
      this.dataSource.sort = this.sort;
    });
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }
}
