import { Observable } from "rxjs";
var File = (function () {
    function File() {
    }
    File.prototype.convertFile = function () {
        console.log('start convertFile function');
        var fileObj = this;
        var obs = new Observable(function (observer) {
            console.log('run');
            var myReader = new FileReader();
            myReader.onloadend = function () {
                console.log('onloadend');
                fileObj.file = btoa(myReader.result);
                observer.next();
                observer.complete();
            };
            myReader.readAsBinaryString(fileObj.file);
        });
        return obs;
    };
    return File;
}());
export { File };
//# sourceMappingURL=../../../../../src/app/d7services/file/file.js.map