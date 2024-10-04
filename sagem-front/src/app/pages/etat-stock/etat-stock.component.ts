import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsService } from 'src/app/service/us.service';

@Component({
  selector: 'app-etat-stock',
  templateUrl: './etat-stock.component.html',
  styleUrls: ['./etat-stock.component.scss']
})
export class EtatStockComponent implements OnInit {
  informationus:any=[];
  filterForm: FormGroup;
 
  submitted = false;
    constructor(private formBuilder: FormBuilder,private usService:UsService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      codeUS: ['', Validators.required],
      codeM: ['', Validators.required],
      
     });

    this.usService.getAllus().subscribe(res=>{
      this.informationus=res
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
   
      this.usService.filterStock(this.filterForm.value.codeUS,this.filterForm.value.codeM).subscribe(res=>{
       
        
       this.informationus=res
        
      })
    }

}
