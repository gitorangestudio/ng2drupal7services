
import { Observable } from "rxjs";
export class File {
  file;
  filename: string;
  filepath: string;
  uid: number;

  constructor() {

  }

  convertFile(){
    console.log('run');
    let fileObj = this;
    if (!fileObj.file) {
      return '';
    }
    var myReader:FileReader = new FileReader();
    Observable.create((observer: any) => {
      myReader.onloadend = function(){
        // console.log(btoa(myReader.result));
        fileObj.file = btoa(myReader.result);
        console.log('File loaded succesfully.');
        observer.next("File loaded");
        observer.complete();
      };
    });
    myReader.readAsBinaryString(fileObj.file);

  }


}
