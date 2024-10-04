import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';///FB simplifier la création des FormGroup -Regroupement des controls
import { UsService } from 'src/app/service/us.service';

@Component({
  selector: 'app-etat-consomation',
  templateUrl: './etat-consomation.component.html',
  styleUrls: ['./etat-consomation.component.scss']
})
export class EtatConsomationComponent implements OnInit {
  informationUS:any=[];
  filterForm: FormGroup;
 
submitted = false;
  constructor(private formBuilder: FormBuilder,private informationUsService:UsService) { }

  ngOnInit(): void {
    this.filterForm = this.formBuilder.group({
      codeUS: ['', Validators.required],
      codeP: ['', Validators.required]
      
     });
    this.informationUsService.getAllus().subscribe(res=>{
      this.informationUS=res;
      
      
    })
  }
  get f() { return this.filterForm.controls; }//
  onSubmit() {
    console.log(this.filterForm.value);
    
     
      this.submitted = true;

      // stop here if form is invalid
      if (this.filterForm.invalid) {
          return;
      }
   
      this.informationUsService.filterEtat(this.filterForm.value.codeUS,this.filterForm.value.codeP).subscribe(res=>{
       
        
       this.informationUS=res
        
      })
    }
}
