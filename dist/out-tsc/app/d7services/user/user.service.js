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
var UserService = (function () {
    function UserService(mainService) {
        this.mainService = mainService;
    }
    UserService.prototype.getUser = function (userId) {
        return this.mainService.get('/user/' + userId).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.createUser = function (user) {
        return this.mainService.post('/user/', user).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.mainService.delete('/user/' + userId).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.updateUser = function (user) {
        return this.mainService.put('/user/' + user.uid, user).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], UserService);
export { UserService };
var User = (function () {
    function User() {
    }
    return User;
}());
export { User };
//# sourceMappingURL=../../../../../src/app/d7services/user/user.service.js.map