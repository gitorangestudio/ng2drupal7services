import { Observable } from "rxjs";
var File = (function () {
    function File() {
    }
    File.prototype.convertFile = function () {
        console.log('run');
        var fileObj = this;
        if (!fileObj.file) {
            return '';
        }
        var myReader = new FileReader();
        Observable.create(function (observer) {
            myReader.onloadend = function () {
                fileObj.file = btoa(myReader.result);
                console.log('File loaded succesfully.');
                observer.next("File loaded");
                observer.complete();
            };
        });
        myReader.readAsBinaryString(fileObj.file);
    };
    return File;
}());
export { File };
//# sourceMappingURL=../../../../../src/app/d7services/file/file.js.map