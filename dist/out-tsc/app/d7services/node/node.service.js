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
var NodeService = (function () {
    function NodeService(mainService) {
        this.mainService = mainService;
    }
    NodeService.prototype.getPosts = function () {
        return this.mainService.get('/api/node').map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    NodeService.prototype.createNode = function (body) {
        return this.mainService.post('/api/node', body).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    NodeService.prototype.UpdateNode = function (body) {
        return this.mainService.put('/api/node/' + body.nid, body).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    NodeService.prototype.DeleteNode = function (nid) {
        return this.mainService.delete('/api/node/' + nid).map(function (res) { return res.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return NodeService;
}());
NodeService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], NodeService);
export { NodeService };
//# sourceMappingURL=../../../../../src/app/d7services/node/node.service.js.map