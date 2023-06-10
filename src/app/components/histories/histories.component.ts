import { Component, OnInit } from '@angular/core';
import { ShareService } from 'src/app/Shared/share.service';

@Component({
  selector: 'app-histories',
  templateUrl: './histories.component.html',
  styleUrls: ['./histories.component.css']
})
export class HistoriesComponent implements OnInit {

  book: any;
  b: any;
  constructor(private shared: ShareService) { 
  }

  ngOnInit(): void {
    this.book = this.shared.getMessage();
    console.log(this.book);
    this.b = JSON.parse(this.book);
    console.log(this.b[0]);
  }

}
