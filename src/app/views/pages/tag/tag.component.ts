import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from './services/tag.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
@ViewChild("modal") public modal?:ModalDirective
  tagForm?: FormGroup
  tags: any
  tagId:any
  submitted=false

  constructor(private tagService: TagService) { }

  ngOnInit(): void {
    this.tagForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
this.getAllTags();
  }

  addTag() {
    this.tagService.createTag(this.tagForm?.value).subscribe((response: any) => {
      console.log(response)
      this.ngOnInit();
    }, (error: any) => {
      console.log(error)
    }
    )
    this.hide();
    
  }
  getAllTags() {
    this.tagService.getTag().subscribe((response: any) => {
      this.tags = response;
      console.log(this.tags);
      
    }, (error: any) => { console.log(error) });
  }

  delete(id:any){
    this.tagService.deleteTag(id).subscribe((response:any)=>{
      this.getAllTags();
    },(error:any)=>{console.log(error)});
  }

  hide() {
    this.modal?.hide();
    // this.tagForm?.reset()
    this.submitted = false;
  }
showData(id:number){
this.tagId=id;
  this.tagService.getTagById(id).subscribe((response:any)=>{
    console.log(response)
    this.tagForm?.patchValue(response);
  },(error:any)=>{console.log(error)});
}
  update(){
    this.tagService.updateTag(this.tagId,this.tagForm?.value)?.subscribe((response:any)=>{
      console.log(response);
      this.ngOnInit();
    },(error:any)=>{console.log(error)});
    
  }

}
