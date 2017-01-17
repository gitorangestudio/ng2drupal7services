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
import { MainService } from './d7services/main/main.service';
var AppComponent = (function () {
    function AppComponent(nodeService, userService, mainService) {
        this.nodeService = nodeService;
        this.userService = userService;
        this.mainService = mainService;
        this.nodes = [];
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        var node = {
            "nid": 4,
            "title": "Edited Title 1",
            "body": {
                "und": [
                    { "value": "Edited Body Value 1" }
                ]
            },
        };
    };
    AppComponent.prototype.customLogin = function (event) {
        this.userService.login('root', 'root');
    };
    AppComponent.prototype.customLogout = function (event) {
        this.userService.logout();
    };
    AppComponent.prototype.status = function (event) {
        var status = this.userService.isLogedIn();
        console.log(status);
    };
    AppComponent.prototype.getUser = function (event) {
        this.userService.getUser(1).subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.updateTheNode = function (event) {
        var node = {
            "nid": 4,
            "title": "Edited Title 2",
            "body": {
                "und": [
                    { "value": "Edited Body Value 1" }
                ]
            },
        };
        this.nodeService.UpdateNode(node).subscribe(function (data) {
            console.log(data);
        });
    };
    AppComponent.prototype.createTheNode = function (event) {
        var node = {
            "title": "New noed with auth",
            "type": "article",
            "body": {
                "und": [
                    { "value": "test body" }
                ]
            },
        };
        this.nodeService.createNode(node).subscribe(function (data) {
            console.log(data);
        });
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
    __metadata("design:paramtypes", [NodeService, UserService, MainService])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=../../../src/app/app.component.js.map