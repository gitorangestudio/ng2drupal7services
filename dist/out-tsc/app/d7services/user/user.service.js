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
        return this.mainService.get('/api/user/' + userId).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.createUser = function (user) {
        return this.mainService.post('/api/user/register', user).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.deleteUser = function (userId) {
        return this.mainService.delete('/api/user/' + userId).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.updateUser = function (user) {
        return this.mainService.put('/api/user/' + user.uid, user).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    UserService.prototype.login = function (username, password) {
        var _this = this;
        return this.mainService.get('/services/session/token').map(function (response) { return response.text(); }).subscribe(function (token) {
            var body = { "name": username, "pass": password };
            _this.mainService.post('/api/user/login', body).map(function (response) { return response.json(); }).subscribe(function (user) {
                console.log("login ok", user);
                _this.mainService.saveCookies(user.token, user.session_name, user.sessid);
            }, function (err) { console.log(err); });
        });
    };
    UserService.prototype.resetPassword = function (nameOrEmail) {
        var body = { "name": nameOrEmail };
        return this.mainService.post('/api/user/request_new_password', body).map(function (response) { return response.json(); });
    };
    UserService.prototype.logout = function () {
        var _this = this;
        this.mainService.post('/api/user/logout', null).map(function (response) { return response.json(); }).subscribe(function (data) {
            _this.mainService.removeCookies();
            console.log('logged out');
        }, function (err) {
            console.log(err);
        });
    };
    UserService.prototype.getStatus = function (session, token) {
        return this.mainService.post('/api/system/connect', null).map(function (response) { return response.json(); });
    };
    UserService.prototype.isLogedIn = function () {
        var _this = this;
        var obs = Observable.create(function (observer) {
            var token = _this.mainService.getToken();
            var session = _this.mainService.getSession();
            if (session && token) {
                _this.getStatus(session, token).subscribe(function (data) {
                    if (data.user.uid && data.user.uid > 0) {
                        observer.next(true);
                        observer.complete();
                    }
                    else {
                        observer.next(false);
                        observer.complete();
                    }
                });
            }
            else {
                observer.next(false);
                observer.complete();
            }
        });
        return obs;
    };
    return UserService;
}());
UserService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], UserService);
export { UserService };
//# sourceMappingURL=../../../../../src/app/d7services/user/user.service.js.map