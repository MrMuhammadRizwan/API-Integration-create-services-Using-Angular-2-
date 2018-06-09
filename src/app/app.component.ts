import { Component } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any;
  constructor(private http: Http) {
  }
  onNameKeyUp(event:any){
    this.getMyBlog(event.target.value);
  }

  getMyBlog(id:number){
    return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
                .map((res: Response) => res.json())
                 .subscribe(data => {
                        this.data = data; 
                        console.log(data);
                });
  }
}
