import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MvttestService } from 'src/app/service/mvttest.service';

@Component({
  selector: 'app-les-log',
  templateUrl: './les-log.component.html',
  styleUrls: ['./les-log.component.scss']
})
export class LesLogComponent implements OnInit {
mvts:any=[]
filterForm: FormGroup;
 
submitted = false;
  constructor(private formBuilder: FormBuilder,private mvttestService:MvttestService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      dateD: ['', Validators.required],
      dateF: ['', Validators.required],
      
     });
    this.mvttestService.getAllMvt().subscribe(res=>{
      this.mvts=res
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
   
      this.mvttestService.filter(this.filterForm.value.dateD,this.filterForm.value.dateF).subscribe(res=>{
       
    
        
       this.mvts=res
        
      })
    }

}
