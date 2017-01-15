var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NodeService } from './d7services/node/node.service';
import { UserService } from './d7services/user/user.service';
import { User } from './d7services/user/user.service';
var AppComponent = (function () {
    function AppComponent(nodeService, userService) {
        this.nodeService = nodeService;
        this.userService = userService;
        this.nodes = [];
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var user = new User();
        user.name = "Abdo2";
        user.mail = "test@test2.com";
        user.pass = 'test';
        user.status = true;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [NodeService, UserService]
    }),
    __metadata("design:paramtypes", [NodeService, UserService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map