import { NgModule } from "@angular/core";
import { ImageModule } from 'primeng/image';
import { DropdownModule } from 'primeng/dropdown';


@NgModule({
	exports: [
		ImageModule,
		DropdownModule
	]
})

export class PrimengModule { }