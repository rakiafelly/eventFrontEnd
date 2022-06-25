import { Pipe, PipeTransform } from '@angular/core';
import { filter } from 'rxjs';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(array:any[],searchText:any):any {

if(searchText){
  return array.filter((x:any)=>
  x.eventName.toLowerCase().includes(searchText)
)}
else{
  return array
}
  }

}
