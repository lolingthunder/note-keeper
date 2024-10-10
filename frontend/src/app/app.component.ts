import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "./shared/http-service.service";
import {lastValueFrom} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';
  result: any;
  constructor(private httpService: HttpServiceService) {
  }
  ngOnInit() {
    this.httpService.getArticle().subscribe(res => {
      this.result = res
    })


  }
}
