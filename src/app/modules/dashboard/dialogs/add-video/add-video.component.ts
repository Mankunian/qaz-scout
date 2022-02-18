import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
	selector: 'app-add-video',
	templateUrl: './add-video.component.html',
	styleUrls: ['./add-video.component.scss']
})
export class AddVideoComponent implements OnInit {
	addVideosForm!: FormGroup;
	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		private userService: UserService,
		public dialogRef: MatDialogRef<AddVideoComponent>,
		private notification: NotificationService
	) {
		this.addVideosForm = new FormGroup({
			"video": new FormControl("", Validators.required)
		})
	}

	ngOnInit(): void {
	}

	addVideo() {
		let video = this.addVideosForm.value.video;
		if (!this.data.videos) {
			this.data.videos = [];
		}
		this.data.videos.push(video);
		this.userService.updateUser(this.data).subscribe(response => {
			console.log(response);
			this.dialogRef.close();
			this.notification.showSnackBar('Видео добавлено')
		})
	}
}
