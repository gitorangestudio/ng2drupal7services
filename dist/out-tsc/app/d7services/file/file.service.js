var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { MainService } from '../main/main.service';
import * as globals from '../globals';
var FileService = (function () {
    function FileService(mainService) {
        this.mainService = mainService;
    }
    FileService.prototype.getAll = function () {
        return this.mainService.get(globals.endpoint + '/file').map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    FileService.prototype.getFileById = function (fid) {
        return this.mainService.get(globals.endpoint + '/file/' + fid).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    FileService.prototype.getUserFiles = function (uid) {
        return this.mainService.get(globals.endpoint + '/file?parameters[uid]=' + uid).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    FileService.prototype.SendCreatedFile = function (file) {
        return this.mainService.post(globals.endpoint + '/file', file).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    FileService.prototype.editFile = function (file) {
        return this.mainService.put(globals.endpoint + '/file/' + file.fid, file).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    FileService.prototype.deleteFile = function (fid) {
        return this.mainService.delete(globals.endpoint + '/file/' + fid).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return FileService;
}());
FileService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], FileService);
export { FileService };
//# sourceMappingURL=../../../../../src/app/d7services/file/file.service.js.map