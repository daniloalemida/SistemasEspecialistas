import { Injectable } from '@angular/core';
import { AnimationDurations } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class RegrasService {

  constructor(private snackBar: MatSnackBar) { }

  showMessage(msg: string): void{
    this.snackBar.open(msg, 'x', {
      duration: 5000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })    
  }
}
