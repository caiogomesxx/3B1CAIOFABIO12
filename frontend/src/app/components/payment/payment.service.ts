import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { HttpClient } from "@angular/common/http";
import { Oculos } from "./oculos.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class PaymentService {
  baseUrl = "http://localhost:3001/oculos";
  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, "X", {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ["msg-error"] : ["msg-success"],
    });
  }

  create(payment: Oculos): Observable<Oculos> {
    return this.http.post<Oculos>(this.baseUrl, payment);
  }
}
