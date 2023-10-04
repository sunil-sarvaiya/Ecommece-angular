import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-manage-address',
  templateUrl: './manage-address.component.html',
  styleUrls: ['./manage-address.component.scss']
})
export class ManageAddressComponent {

  addressData: any = [];
  addressId: any;
  userForm: any;
  AddressDataForUpdate: any;
  forUpdateButton:boolean=false;
  forSubmitButton:boolean=true;

  constructor(private user: UserService, private toastr: ToastrService) { }

  ngOnInit() {
    this.formData();
    this.getAddressData();
  }

  formData() {
    this.userForm = new FormGroup({
      username: new FormControl('', Validators.required),
      homeNumber: new FormControl('', Validators.required),
      villageName: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.pattern(/^\d{6}$/)]),
      districtName: new FormControl('', Validators.required),
      stateName: new FormControl('', Validators.required)
    });

  }

  onSubmit(data: any) {
    this.user.postAddress(data).subscribe((res) => {
      this.userForm.reset();
      this.toastr.success("address added successfully!!")
      this.getAddressData();
    })
  }

  getAddressData() {
    this.user.getAddress().subscribe((res) => {
      this.addressData = res;
    })
  }

  deleteAddress(id: any) {
    this.user.deleteAddress(id).subscribe((res) => {
      this.getAddressData();
      this.toastr.success("address deleted successfully!!")
    })
  }

  updateAddress(item: any) {
    this.forUpdateButton=true;
    this.forSubmitButton=false;

    this.addressId=item.id;
    if (item) {
      this.AddressDataForUpdate = item;
      this.userForm.setValue({
        username: this.AddressDataForUpdate.username || "",
        homeNumber: this.AddressDataForUpdate.homeNumber || '',
        villageName: this.AddressDataForUpdate.villageName || "",
        pincode: this.AddressDataForUpdate.pincode || "",
        districtName: this.AddressDataForUpdate.districtName || "",
        stateName: this.AddressDataForUpdate.stateName || "",
      })
    }
  }

  UpdateData(data:any){
    this.forUpdateButton=false;
    this.forSubmitButton=true;
   
    
    this.user.updateAddress(this.addressId,data,).subscribe((res) => {
      this.getAddressData();
      this.userForm.reset();
    })

  


  }


}
