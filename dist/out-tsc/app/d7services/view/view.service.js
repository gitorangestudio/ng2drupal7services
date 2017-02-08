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
import { MainService } from '../main/main.service';
import { Observable } from "rxjs";
import * as globals from '../globals';
var ViewService = (function () {
    function ViewService(mainService) {
        this.mainService = mainService;
    }
    ViewService.prototype.getView = function (viewName, args) {
        return this.mainService.get(globals.endpoint + '/' + viewName + '?uid=' + args).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return ViewService;
}());
ViewService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], ViewService);
export { ViewService };
//# sourceMappingURL=../../../../../src/app/d7services/view/view.service.js.map