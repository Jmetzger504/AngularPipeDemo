import { Component } from "@angular/core";

@Component({
    selector: "stock",
    templateUrl: "stock.component.html",
    styleUrls: ["stock.component.css"]
})

export class Stock {
    holdings = [
        {stockId: 101,stock: "Microsoft",availableQty : 50,purchasePrice : 125,currentPrice : 175},
        {stockId : 102,stock : "Apple",availableQty : 20,purchasePrice : 100,currentPrice : 185},
        {stockId : 103,stock : "Google",availableQty : 30,purchasePrice : 110,currentPrice : 195},
        {stockId : 104,stock : "Amazon",availableQty : 40,purchasePrice : 135,currentPrice : 205},
        {stockId : 105,stock : "Netflix",availableQty : 70,purchasePrice : 145,currentPrice : 215}
    ]
    
}