import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array:any[],searchText:any): any {
    if(searchText){
      return  array.filter((x:any)=>
        x.companyName.toLowerCase().includes(searchText) || x.email.toLowerCase().includes(searchText)
      )
    }
    else{
      return array;
    }
    
  }

}
