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
var CommentService = (function () {
    function CommentService(mainService) {
        this.mainService = mainService;
    }
    CommentService.prototype.getAll = function () {
        return this.mainService.get('/api/comment').map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.getCommentById = function (cid) {
        return this.mainService.get('/api/comment/' + cid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.getCommentChildren = function (cid) {
        return this.mainService.get('/api/comment?parameters[pid]=' + cid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.getNodeComments = function (nid) {
        return this.mainService.post('/api/comment?parameters[nid]=' + nid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.getUserComments = function (uid) {
        return this.mainService.post('/api/comment?parameters[uid]=' + uid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.createComment = function (comment) {
        return this.mainService.post('/api/comment', comment).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.updateComment = function (comment) {
        return this.mainService.put('/api/comment/' + comment.cid, comment).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    CommentService.prototype.deleteComment = function (cid) {
        return this.mainService.delete('/api/comment/' + cid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return CommentService;
}());
CommentService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], CommentService);
export { CommentService };
//# sourceMappingURL=../../../../../src/app/d7services/comment/comment.service.js.map