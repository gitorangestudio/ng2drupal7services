
import { Observable } from "rxjs";
export class File {
  file;
  filename: string;
  filepath: string;
  uid: number;

  constructor() {

  }

  // convertFile() {
  //   let obs = Observable.of({});
  //   console.log('run');
  //   let fileObj = this;
  //   var myReader:FileReader = new FileReader();
  //   myReader.onloadend = function(){
  //     console.log(btoa(myReader.result));
  //     fileObj.file = btoa(myReader.result);
  //     obs.subscribe();
  //   };
  //   myReader.readAsBinaryString(fileObj.file);
  //   return obs.toPromise();
  // }

  convertFile(): Observable<any>{
    console.log('start convertFile function');
    let fileObj = this;
    let obs = new Observable(observer => {
      console.log('run');

      var myReader:FileReader = new FileReader();
      myReader.onloadend = function(){
        console.log('onloadend');
        fileObj.file = btoa(myReader.result);
        observer.next();
        observer.complete();
      };
      myReader.readAsBinaryString(fileObj.file);
    });
    return obs;
  }
}
