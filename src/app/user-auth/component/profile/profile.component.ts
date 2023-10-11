import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  profileForm: any;
  profileId: any;
  profileData: any;
  AddressDataForUpdate: any;
  newUserName: any;

  constructor(private route: ActivatedRoute, private userService: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.registrationFormData();
    this.profileId = this.route.snapshot.paramMap.get('id');
    this.userService.getProfileDataById(this.profileId).subscribe((res) => {
      this.profileData = res;
      if (this.profileData) {
        this.AddressDataForUpdate = this.profileData;
        this.profileForm.setValue({
          firstname: this.AddressDataForUpdate.firstname || "",
          lastname: this.AddressDataForUpdate.lastname || '',
          email: this.AddressDataForUpdate.email || "",
          password: this.AddressDataForUpdate.password || "",
          username: this.AddressDataForUpdate.username || "",
          gender: this.AddressDataForUpdate.gender || "",
        })
      }
    })
  }
  registrationFormData() {
    this.profileForm = new FormGroup({
      firstname: new FormControl('', Validators.required),
      lastname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]+$')]),
      username: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required)
    });
  }
  updateProfileData(data: any) {
    if (data) {
      data.id = this.profileData.id;
    }
    this.userService.updateProfileData(data).subscribe((res) => {
      localStorage.setItem('logindata', JSON.stringify(res))
      this.toastr.success("Your Profile Data Updated Successfully!!");
    },
      (error) => {
        this.toastr.error("Your Profile Data Is Not Updated!!")
      })
  }
  getUserName(data: any) {
    this.newUserName = data;
    localStorage.setItem('username', this.newUserName)
  }
}