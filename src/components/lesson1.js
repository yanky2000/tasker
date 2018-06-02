// import * as Rx from 'rxjs/Rx'

// const observable = Rx.Observable.create( observer => {
//     observer.next('helllo')
//     observer.next('world')
// })

// observable.subscribe(val => document.write(val))

import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';
import { map, filter, switchMap } from 'rxjs/operators';
 
range(1, 200)
  .pipe(filter(x => x % 2 === 1), map(x => x + x))
  .subscribe(x => console.log(x));