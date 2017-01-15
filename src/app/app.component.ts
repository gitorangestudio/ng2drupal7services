import { Component, OnInit } from '@angular/core';
import { NodeService } from './d7services/node/node.service';
import { UserService } from './d7services/user/user.service';
import { User } from './d7services/user/user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [NodeService, UserService]
})
export class AppComponent implements OnInit{

  nodes = [];

  constructor(private nodeService: NodeService, private userService: UserService) {}
  title = 'app works!';

  ngOnInit() {



    // Get nodes
    // this.nodeService.getPosts().subscribe(res => {
    //   this.nodes = res;
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });

    // Create node
    // var node = {
    // 	"nid": 1,
  	// 	"title": "Edited Title",
  	// 	"body": {
  	// 	  "und": [
  	// 	    {"value": "Edited Body Value" }
  	// 	  ]
  	// 	},
  	// };
		// this.nodeService.createNode(this.node_object).subscribe(res => {
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });


		// Update Node
		// this.nodeService.UpdateNode(this.node_object).subscribe(res => {
		// 	console.log(res);
		// }, err => {
		// 	console.log(err)
		// });


		// Delete Node
		// this.nodeService.DeleteNode(this.deleted_nid).subscribe(res => {
		// 	console.log(res);
		// }, err => {
		// 	console.log(err)
		// });

    let user: User = new User();
    user.name = "Abdo2";
    user.mail = "test@test2.com";
    user.pass = 'test';
    user.status = true;

    //this.userService.createUser(user).subscribe();


    // Create User
    // var user = {"name":"user1","mail":"test@test.com","pass":"user1", "status": 1};
    // this.userService.createUser(user).subscribe(res => {
    //
		// 	console.log(res);
		// }, err => {
		// 	console.log(err);
		// });


  }


}
