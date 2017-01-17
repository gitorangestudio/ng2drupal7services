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
var VocabularyService = (function () {
    function VocabularyService(mainService) {
        this.mainService = mainService;
    }
    VocabularyService.prototype.getVocabularies = function () {
        return this.mainService.get('/api/taxonomy_vocabulary').map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    VocabularyService.prototype.getVocabulary = function (vid) {
        return this.mainService.get('/api/taxonomy_vocabulary/' + vid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    VocabularyService.prototype.createVocabulray = function (body) {
        return this.mainService.post('/api/taxonomy_vocabulary', body).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    VocabularyService.prototype.updateVocabulray = function (body) {
        return this.mainService.put('/api/taxonomy_vocabulary/' + body.vid, body).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    VocabularyService.prototype.deleteVocabulray = function (vid) {
        return this.mainService.delete('/api/taxonomy_vocabulary/' + vid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return VocabularyService;
}());
VocabularyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], VocabularyService);
export { VocabularyService };
//# sourceMappingURL=../../../../../src/app/d7services/vocabulary/vocabulary.service.js.map