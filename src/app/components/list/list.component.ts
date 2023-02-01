import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/common/product-model';
import { products } from 'src/app/common/products';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListExampleComponent {
    public series = [
        { category: 'EUROPE', value: 0.3 },
        { category: 'NORTH AMERIKA', value: 0.23 },
        { category: 'AUSTRALIA', value: 0.18 },
        { category: 'ASIA', value: 0.15 },
        { category: 'SOUTH AMERIKA', value: 0.09 },
        { category: 'AFRICA', value: 0.05 }
    ];
    public gridData: Product[] = products;
    public pageSize = 10;
    public formGroup: undefined | FormGroup;

    constructor(private formBuilder: FormBuilder) {}

    public createFormGroup = (args: any): FormGroup => {
        const item = args.isNew ? new Product() : args.dataItem;

        this.formGroup = this.formBuilder.group({
            ProductID: item.ProductID,
            ProductName: [item.ProductName, Validators.required],
            UnitPrice: item.UnitPrice,
            UnitsInStock: [item.UnitsInStock, Validators.compose([Validators.required, Validators.pattern('^[0-9]{1,3}')])],
            Discontinued: item.Discontinued
        });

        return this.formGroup;
    }
}
