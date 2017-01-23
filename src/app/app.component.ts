import { Component, OnInit } from '@angular/core';
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
    this.userService.login('root', 'root');
  }


  customLogout(event){
    this.userService.logout();
  }

  status (event){
    var status = this.userService.isLogedIn();
    console.log(status);
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
      });
    }

    uploadFile(event) {

    
      var file: File = new File();
      file.file = event.target.files[0];
      file.uid = 1;
      file.filename = 'test3.png';
      file.convertFile();
      // this.fileService.SendCreatedFile(file).subscribe(res => {
      //   console.log(res.fid);
      // });

    }

        // Get nodes
}
