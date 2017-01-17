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
var TaxonomyService = (function () {
    function TaxonomyService(mainService) {
        this.mainService = mainService;
    }
    TaxonomyService.prototype.getAll = function () {
        return this.mainService.get('/api/taxonomy_term').map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    TaxonomyService.prototype.getVocalbularyTerms = function (vid) {
        return this.mainService.get('/api/taxonomy_term?parameters[' + vid + ']=').map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    TaxonomyService.prototype.getTermByName = function (name) {
        return this.mainService.get('/api/taxonomy_term?parameters[name]=' + name).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    TaxonomyService.prototype.createTerm = function (term) {
        return this.mainService.post('/api/taxonomy_term', term).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    TaxonomyService.prototype.updateTerm = function (term) {
        return this.mainService.put('/api/taxonomy_term/' + term.vid, term).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    TaxonomyService.prototype.deleteTerm = function (vid) {
        return this.mainService.delete('/api/taxonomy_term/' + vid).map(function (response) { return response.json(); }).catch(function (err) { return Observable.throw(err); });
    };
    return TaxonomyService;
}());
TaxonomyService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [MainService])
], TaxonomyService);
export { TaxonomyService };
//# sourceMappingURL=../../../../../src/app/d7services/taxonomy/taxonomy.service.js.map