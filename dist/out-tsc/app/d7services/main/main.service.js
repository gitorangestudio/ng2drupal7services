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
var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.serviceURL = "http://localhost:81/api";
        this.headers = new Headers({
            "Accept": "application/json",
            "Content-Type": "application/json",
        });
    }
    MainService.prototype.getURL = function (url) {
        return this.serviceURL + url;
    };
    MainService.prototype.getOptions = function (options) {
        var op = { Headers: this.headers };
        return Object.assign(op, options);
    };
    MainService.prototype.get = function (endpoint, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.get(url, op);
    };
    MainService.prototype.post = function (endpoint, body, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.post(url, body, op);
    };
    MainService.prototype.put = function (endpoint, body, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.put(url, body, op);
    };
    MainService.prototype.delete = function (endpoint, options) {
        var url = this.getURL(endpoint);
        var op = this.getOptions(options);
        return this.http.delete(url, op);
    };
    return MainService;
}());
MainService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], MainService);
export { MainService };
//# sourceMappingURL=../../../../../src/app/d7services/main/main.service.js.map