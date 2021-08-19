import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  imgFile!: string;
  profileForm = this.formBuilder.group({
    username: [null, Validators.required],
    email: [null, Validators.compose([
      Validators.required, Validators.email
    ])],
    gender: null,
    bio: null,
    file: null,
    image: null
  });

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
  }

  validateForm(): boolean {
    return this.profileForm.valid;
  }

  sendForm = () => {
    if (this.validateForm()) {
      console.log('************* send from', this.profileForm.value);
    }
  }

  onImageChange(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      console.log('************* event.target.files: ', event.target.files);
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.imgFile = reader.result as string;
        this.profileForm.patchValue({
          image: reader.result
        });
      };
    }
  }

}
