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
import { Http, Headers } from '@angular/http';
import { CookieService } from 'angular2-cookie/core';
import * as globals from '../globals';
var MainService = (function () {
    function MainService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.serviceURL = globals.domain;
    }
    MainService.prototype.getURL = function (url) {
        return this.serviceURL + url;
    };
    MainService.prototype.getOptions = function (options) {
        var headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
        });
        var token = this.getToken();
        var session = this.getSession();
        if (session && token) {
            headers.append('Cookie', session);
            headers.append('X-CSRF-Token', token);
        }
        var basicOptions = { withCredentials: true, headers: headers };
        if (options) {
            return Object.assign(basicOptions, options);
        }
        return basicOptions;
    };
    MainService.prototype.get = function (endpoint, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.get(url, op).timeout(5000);
    };
    MainService.prototype.post = function (endpoint, body, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.post(url, body, op).timeout(5000);
    };
    MainService.prototype.put = function (endpoint, body, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.put(url, body, op).timeout(5000);
    };
    MainService.prototype.delete = function (endpoint, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.delete(url, op).timeout(5000);
    };
    MainService.prototype.saveCookies = function (token, session_name, sessid) {
        this.cookieService.put('sessid', sessid);
        this.cookieService.put('session_name', session_name);
        this.cookieService.put('token', token);
    };
    MainService.prototype.removeCookies = function () {
        this.cookieService.remove('sessid');
        this.cookieService.remove('session_name');
        this.cookieService.remove('token');
    };
    MainService.prototype.getToken = function () {
        var token = this.cookieService.get('token');
        if (token) {
            return token;
        }
        return null;
    };
    MainService.prototype.getSession = function () {
        var session = this.cookieService.get('session_name') + '=' + this.cookieService.get('sessid');
        if (session) {
            return session;
        }
        return null;
    };
    return MainService;
}());
MainService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http, CookieService])
], MainService);
export { MainService };
//# sourceMappingURL=../../../../../src/app/d7services/main/main.service.js.map