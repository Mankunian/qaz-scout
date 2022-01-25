import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatButtonModule,
		MatBadgeModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatRippleModule,
		MatDialogModule,
		MatInputModule,
		MatSelectModule
	],
	exports: [
		MatButtonModule,
		MatBadgeModule,
		MatNativeDateModule,
		MatDatepickerModule,
		MatRippleModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
		MatTableModule,
		MatSnackBarModule,
		MatCardModule
	],
	providers: [MatDialogModule]
})
export class AngularMaterialModule { }
