import { Component, OnInit } from '@angular/core';
// import { log } from 'console';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-aq-card',
  templateUrl: './aq-card.component.html',
  styleUrls: ['./aq-card.component.css'],
})
export class AqCardComponent implements OnInit
{
  aqCard: any = {value:null,hi:null,lo:null};

  constructor(private service: ApiService) {}

  ngOnInit(): void
  {
    this.getAllData();
  }

  private getAllData() {
    this.service.geData().subscribe(
      (res) =>
      {
        console.log(res[0].data[0]);
        // const aqData ;
        const aqData = res[0].data[0];
        this.aqCard = aqData;
        // console.log(aqData);


      },
      (error) => {
        console.log(error);

      }
    );
  }
}
