// import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
// import { Component, OnInit } from '@angular/core';
// import { StreamData, oauth, Stream, todo, Pages, NextData } from './models';
// import axios from 'axios';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

// export class AppComponent implements OnInit {
//   title = 'twitch_search';

//   streams: Stream[]
//   nextdatas: NextData[]
//   todos: todo[];

//   token: oauth;
//   searchValue: string;
//   pager: string;

//   constructor(private httpClient: HttpClient) { }

//   ngOnInit() {
//     const tokenparams = new HttpParams()
//       .set('client_id', '4scexyqd6nhgn4ewulcsegxdt2xgtt')
//       .set('client_secret', 'z1tk94dzm4z52r3ji29fjm5vnd5m9v')
//       .set('grant_type', 'client_credentials');

//     // this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos/').subscribe((result: todo[]) => {
//     //   this.todos = result;
//     //   console.log(this.todos[0].id.toString())
//     // })

//     // this.httpClient.post<any>('https://id.twitch.tv/oauth2/token', tokenparams).subscribe((result: oauth) => {
//     // this.token = result;
//     // console.log(this.token.access_token)
//     // })
//   }
//   onWorldOfWarcraft() {
//     // const streamparams = new HttpParams()
//     //   .set('game_id', '928412879');
//     //   .set('first', '100')
//     //   .set('after', '');

//     // const streamheaders = new HttpHeaders()
//     //   .set('Authorization', 'Bearer rqvhf3nsmh6y6udhipqxmdlf7epaq9')
//     //   .set('client-id', '4scexyqd6nhgn4ewulcsegxdt2xgtt')
//     this.pager = '';

//     const streamOptions = {
//       headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer cfpb7uft321pccua7jww9qtzt36g0e', 'client-id': '4scexyqd6nhgn4ewulcsegxdt2xgtt' },
//       params: { 'game_id': '18122', 'first': '100', 'after': this.pager }
//     };

//     this.httpClient.get<any>('https://api.twitch.tv/helix/streams', streamOptions).subscribe(result => 
//     {
//       this.streams = result.data
//       console.log(this.streams);
//       this.pager = result.pagination.cursor
//       console.log(this.pager);
//     })   
//   }
  
//   async onLoadNextData(){

//     // const streamOptions = {
//     //   headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer cfpb7uft321pccua7jww9qtzt36g0e', 'client-id': '4scexyqd6nhgn4ewulcsegxdt2xgtt' },
//     //   params: { 'game_id': '18122', 'first': '100', 'type': 'live', 'after': this.pager }
//     // };

//     // this.httpClient.get<any>('https://api.twitch.tv/helix/streams', streamOptions).subscribe(result => 
//     // {
//     //   this.nextdatas = result.data
//     //   console.log(this.streams.concat(this.nextdatas))
//     //   this.streams = this.streams.concat(this.nextdatas)
//     //   this.pager = result.pagination.cursor
//     // })


//       let results: NextData[] = [];
//       let nextPaginationString = this.pager;

//       while (nextPaginationString !== undefined) {
//         const response = await axios.get(`https://api.twitch.tv/helix/streams`, {
//           headers: {
//             'Content-Type': 'application/json', 'Authorization': 'Bearer cfpb7uft321pccua7jww9qtzt36g0e', 'client-id': '4scexyqd6nhgn4ewulcsegxdt2xgtt'
//           },
//           params: {
//             'game_id': '18122', 'first': '100', 'type': 'live', 'after': nextPaginationString
//           }
//         });
//         this.nextdatas = response.data
//         this.streams = this.streams.concat(this.nextdatas)
//         nextPaginationString = response.data.pagination.cursor;
//       }
//       //this.streams = this.streams.concat(results);
//     }
// }


import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StreamData, oauth, Stream, todo, Pages, NextData } from './models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'twitch_search';

  streams: Stream[]
  nextdatas: NextData[]
  todos: todo[];

  token: oauth;
  searchValue: string;
  pager: string;

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    const tokenparams = new HttpParams()
      .set('client_id', '4scexyqd6nhgn4ewulcsegxdt2xgtt')
      .set('client_secret', 'z1tk94dzm4z52r3ji29fjm5vnd5m9v')
      .set('grant_type', 'client_credentials');

    // this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos/').subscribe((result: todo[]) => {
    //   this.todos = result;
    //   console.log(this.todos[0].id.toString())
    // })

    // this.httpClient.post<any>('https://id.twitch.tv/oauth2/token', tokenparams).subscribe((result: oauth) => {
    // this.token = result;
    // console.log(this.token.access_token)
    // })
  }
  onWorldOfWarcraft() {
    // const streamparams = new HttpParams()
    //   .set('game_id', '928412879');
    //   .set('first', '100')
    //   .set('after', '');

    // const streamheaders = new HttpHeaders()
    //   .set('Authorization', 'Bearer rqvhf3nsmh6y6udhipqxmdlf7epaq9')
    //   .set('client-id', '4scexyqd6nhgn4ewulcsegxdt2xgtt')
    this.pager = '';

    const streamOptions = {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer cfpb7uft321pccua7jww9qtzt36g0e', 'client-id': '4scexyqd6nhgn4ewulcsegxdt2xgtt' },
      params: { 'game_id': '18122', 'first': '100', 'after': this.pager }
    };

    this.httpClient.get<any>('https://api.twitch.tv/helix/streams', streamOptions).subscribe(result => 
    {
      this.streams = result.data
      console.log(this.streams);
      this.pager = result.pagination.cursor
      console.log(this.pager);
    })   
  }
  onLoadNextData(){
    const streamOptions = {
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer cfpb7uft321pccua7jww9qtzt36g0e', 'client-id': '4scexyqd6nhgn4ewulcsegxdt2xgtt' },
      params: { 'game_id': '18122', 'first': '100', 'type': 'live', 'after': this.pager }
    };

    this.httpClient.get<any>('https://api.twitch.tv/helix/streams', streamOptions).subscribe(result => 
    {
      this.nextdatas = result.data
      console.log(this.streams.concat(this.nextdatas))
      this.streams = this.streams.concat(this.nextdatas)
      this.pager = result.pagination.cursor
    })
  }
}