import { Observable } from "rxjs";
var File = (function () {
    function File() {
    }
    File.prototype.convertFile = function () {
        console.log('start convertFile function');
        var fileObj = this;
        var obs = new Observable(function (observer) {
            console.log('run');
        });
        return obs;
    };
    return File;
}());
export { File };
//# sourceMappingURL=../../../../../src/app/d7services/file/file.js.map