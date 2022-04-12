import { Component } from "@angular/core";

@Component({
    selector: "products",
    templateUrl: "products.component.html",
    styleUrls: ["products.component.css"]
})

export class Products {

    compName = "Products Component";
    developer = "Julian Metzger";
    productCategories = ["Car","Bike","Helicopter","Jet","Autocannon"];
    productList = [
        {pId: 101, pName: "Mustang", pCategory: "Car", pPrice:20000},
        {pId: 102, pName: "Mountain Bike", pCategory: "Bike", pPrice:200},
        {pId: 103, pName: "AH-64", pCategory: "Helicopter", pPrice:200000},
        {pId: 104, pName: "F-22", pCategory: "Jet", pPrice:20000000},
        {pId: 105, pName: "AU-8", pCategory: "Autocannon", pPrice:200000}
    ];

    greetUser() {
        alert("Hello there!");
    }

    addProductCategory() {
        this.productCategories.push("Laptop");
        this.productCategories.sort();
    }

    addProductCategory2(newCategory:string) {
        this.productCategories.push(newCategory);
        this.productCategories.sort();
    }

    
}