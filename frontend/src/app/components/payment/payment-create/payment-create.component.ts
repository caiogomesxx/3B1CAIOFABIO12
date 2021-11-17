import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PaymentService } from "../payment.service";
import { Oculos } from "../oculos.model";

@Component({
  selector: "app-payment-create",
  templateUrl: "./payment-create.component.html",
  styleUrls: ["./payment-create.component.css"],
})
export class PaymentCreateComponent implements OnInit {
  payment: Oculos = {
    modelo: "",
    preco: 0,
    codigo: 0,
  };

  constructor(private paymentService: PaymentService, private router: Router) {}

  ngOnInit(): void {}

  createPayment(): void {
    this.paymentService.create(this.payment).subscribe(() => {
      this.paymentService.showMessage("Óculos cadastrado!");
      this.router.navigate(["/payments"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/payments"]);
  }
}
