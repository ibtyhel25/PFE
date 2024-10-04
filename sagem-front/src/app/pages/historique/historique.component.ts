import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsService } from 'src/app/service/us.service';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.scss']
})
export class HistoriqueComponent implements OnInit {
  historique:any=[];
  filterForm: FormGroup;
 
submitted = false;
  constructor(private formBuilder: FormBuilder,private usService:UsService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      code: ['', Validators.required],
      
     });

    this.usService.getAllus().subscribe(res=>{
      this.historique=res
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
   
      this.usService.filter(this.filterForm.value.code).subscribe(res=>{
       
        
       this.historique=res
        
      })
    }
}
