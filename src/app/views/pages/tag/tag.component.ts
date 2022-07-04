import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TagService } from './services/tag.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
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
  searchText:any
  constructor(private toastr:ToastrService, private tagService: TagService) { }

  ngOnInit(): void {
    this.tagForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required])
    })
this.getAllTags();
  }

  addTag() {
    this.submitted=true;
    if (this.tagForm?.invalid) {
      return;
    }
    this.tagService.createTag(this.tagForm?.value).subscribe((response: any) => {
      this.toastr.success('Tag is created successfully','Success')
      location.reload();
    }, (error: any) => {
      this.toastr.error('Tag already exist','Exist');
    }
    )
  }
  getAllTags() {
    this.tagService.getTag().subscribe((response: any) => {
      this.tags = response;
    }, (error: any) => { console.log(error) });
  }

  delete(id:any){
    this.tagService.deleteTag(id).subscribe((response:any)=>{
      this.getAllTags();
      this.toastr.info('Tag is deleted successffuly','Deleted')
    },(error:any)=>{console.log(error)});
  }

showData(id:number){
 this.tagId=id;
  this.tagService.getTagById(id).subscribe((response:any)=>{
    this.tagForm?.patchValue(response);
  },(error:any)=>{console.log(error)});
}
  update(){
    this.submitted=true;
    if (this.tagForm?.invalid) {
      return;
    }
    this.tagService.updateTag(this.tagId,this.tagForm?.value)?.subscribe((response:any)=>{
      this.toastr.success('Tag is updated successfully','Updated' )
      location.reload();
    },(error:any)=>{console.log(error)});
    
  }

}
