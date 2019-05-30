import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from '../products-container/products-container.component';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {
  @Input() product: Product;
  @Output() save = new EventEmitter<Product>();
  formGroup: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      id: [''],
      name: [''],
      code: [''],
      price: []
    });
    this.formGroup.patchValue(this.product);
  }

  async submit() {
    if (this.formGroup.valid) {
      this.save.emit(this.formGroup.value);
    }
  }
}
