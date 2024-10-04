import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PicklistService } from 'src/app/service/picklist.service';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss']
})
export class PickListComponent implements OnInit {
picklist:any=[];
p: number = 1;
filterForm: FormGroup;
 
submitted = false;
  constructor(private formBuilder: FormBuilder,private picklistService:PicklistService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      date: ['', Validators.required],
      
     });
     this.picklistService.getAllPicklist().subscribe(res=>{
      this.picklist=res
    })
  }
  
  get f() { return this.filterForm.controls; }
  onSubmit() {
    console.log(this.filterForm.value);
    
     
      this.submitted = true;

      // stop here if form is invalid
      if (this.filterForm.invalid) {
          return;
      }
   
      this.picklistService.filter(this.filterForm.value.date).subscribe(res=>{
       
        
       this.picklist=res
        
      })
    }

}
