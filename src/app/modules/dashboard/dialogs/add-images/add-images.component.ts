import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-add-images',
	templateUrl: './add-images.component.html',
	styleUrls: ['./add-images.component.scss']
})
export class AddImagesComponent implements OnInit {
	addImagesForm!: FormGroup;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private userService: UserService,
		public dialogRef: MatDialogRef<AddImagesComponent>,
		private notification: NotificationService
	) {
		this.addImagesForm = new FormGroup({
			"img": new FormControl("", Validators.required)
		})
	}

	ngOnInit(): void {
	}

	addImage(): void {
		let image = this.addImagesForm.value.img;
		if (!this.data.images) {
			this.data.images = [];
		}
		this.data.images.push(image);
		this.userService.updateUser(this.data).subscribe(response => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Фото добавлено')
		})
	}

}
