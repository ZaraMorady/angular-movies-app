import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name : 'profit'})

export class ProfitPipe implements PipeTransform {

    transform(value : number, profperc = 5): number
    { return  value* profperc*1/100;}
   

}