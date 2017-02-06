import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { NodeService } from './d7services/node/node.service';
import { UserService } from './d7services/user/user.service';
import { MainService } from './d7services/main/main.service';
import { User } from './d7services/user/user';
import { FileService } from './d7services/file/file.service';
import { File } from './d7services/file/file';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NodeService, UserService, FileService]
})
export class AppComponent implements OnInit{

  nodes = [];

  constructor(private nodeService: NodeService, private userService: UserService, private mainService: MainService, private fileService: FileService) {}
  title = 'app works!';

  ngOnInit() {


    // this.nodeService.getPosts().subscribe(res => {
    //   this.nodes = res;
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });

    // Create node
    var node = {
    	"nid": 4,
  		"title": "Edited Title 1",
  		"body": {
  		  "und": [
  		    {"value": "Edited Body Value 1"}
  		  ]
  		},
  	};
		// this.nodeService.createNode(this.node_object).subscribe(res => {
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });


		// Update Node


		// Delete Node
		// this.nodeService.DeleteNode(this.deleted_nid).subscribe(res => {
		// 	console.log(res);
		// }, err => {
		// 	console.log(err)
		// });

    // let user: User = new User();
    // user.uid = 5;
    // user.name = "Abdo3_update";
    // user.mail = "test@test3.com";
    // user.pass = 'test';
    // user.status = 1;
    // console.log(user);
    //this.userService.createUser(user).subscribe();
    //this.userService.updateUser(user).subscribe();

    // Create User
    // var user = {"name":"user1","mail":"test@test.com","pass":"user1", "status": 1};
    // this.userService.crea  //
  // customLogin1(event){
  //     this.userService.getToken();
  // }
  //
  // updateTheNode(event){
  //   var node = {
  //   	"nid": 4,
  // 		"title": "Edited Title 1",
  // 		"body": {
  // 		  "und": [
  // 		    {"value": "Edited Body Value 1"}
  // 		  ]
  // 		},
  // 	};
  //   this.nodeService.UpdateNode(node).subscribe(res => {
  //     console.log(res);
  //   }, err => {
  //     console.log(err)
  //   });
  // }teUser(user).subscribe(res => {
    //
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });


    // User Login
    //this.userService.login("root", "root").subscribe();

  }


  customLogin(event){
      this.userService.login('root', 'root').subscribe(response => {
        response.subscribe(res =>{
        }, err => {
          if(err.status == 406){

          }
          else{
            console.log(err);
          }
        });
      }, err => {
        console.log(err);
      });
  }


  customLogout(event){
    this.userService.logout().subscribe(res => {
      // should remove cookie
    });
  }

  status (event){
    var status = this.userService.isLogedIn().subscribe(result => {
      console.log(result);
    });

  }

  getUser(event){
      this.userService.getUser(1).subscribe(data =>{
        console.log(data);
      });}

  updateTheNode(event){
    var node = {
    	"nid": 4,
  		"title": "Edited Title 2",
  		"body": {
  		  "und": [
  		    {"value": "Edited Body Value 1"}
  		  ]
  		},
  	};
    this.nodeService.UpdateNode(node).subscribe(data =>{
      console.log(data);
    });
  }



    createTheNode(event){
      var node = {
    		"title": "New noed with auth",
        "type": "article",
    		"body": {
    		  "und": [
    		    {"value": "test body"}
    		  ]
    		},
    	};
      this.nodeService.createNode(node).subscribe(data =>{
        console.log(data);
      }, err => {

      });
    }

    uploadFile(event) {

      // var result = Observable.create(function (subscriber) {
      //   console.log('test');
      //   subscriber.next(Math.random());
      //   subscriber.next(Math.random());
      //   subscriber.next(Math.random());
      //   subscriber.complete();
      //   subscriber.next(Math.random());
      // });
      // result.subscribe(x => console.log(x));
      var file: File = new File();
      file.file = event.target.files;
      file.uid = 1;
      file.filename = 'test4.png';
      file.convertFile().subscribe(data => {
        console.log('start');

        console.log(data);
        console.log('end');
        // this.fileService.SendCreatedFile(file).subscribe(res => {
        //   console.log(res.fid);
        // });
      });




    }

        // Get nodes
}
