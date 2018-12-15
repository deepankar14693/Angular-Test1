import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';


@Injectable()
export class SharedService {

    // Observable string sources
  public caseNumber = new Subject<string>();  

  // Observable string streams
  caseNumber$ = this.caseNumber.asObservable();

    // Service message commands
  publishData(data: string) {
    this.caseNumber.next(data);
  }
}