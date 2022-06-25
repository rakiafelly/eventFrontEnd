import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array: any[], searchText: any):any {
    if(searchText){
    return array.filter((x: any) =>
      x.title.toLowerCase().includes(searchText)
    )
  }
    
     else{
  return array;

  }

  }
}