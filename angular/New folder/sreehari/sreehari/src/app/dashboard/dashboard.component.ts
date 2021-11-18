import { Component, OnInit, ViewChild } from '@angular/core';
import {} from 'googlemaps';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { IotservicesService} from './../iotservices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  providers: [DatePipe]
})
export class DashboardComponent implements OnInit {

  title = 'IoT-Logs';
  public filterOption = "";
  public productFields: string[] = ['name', 'code', 'expirationDate', 'category', 'status', 'action'];
  public products: any = [];
    
  public doughnutChartLabels: Label[] = ['Download Data', 'Uploaded Data', 'Hit Rate'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100],
    [50, 150, 120],
    [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';
  public today: any;
  public yesterday: any;
  @ViewChild('map') gMapEl: any;
  map!: google.maps.Map;
  constructor(private datePipe: DatePipe, private service: IotservicesService) {
  }

  ngOnInit(): void {
    this.service.get().subscribe((data: any) => {
      if (data) {
        this.products = data;
      } 
    });
    const date = new Date();
    this.today = this.datePipe.transform(date,'MM/dd/yyyy');
    this.yesterday = this.datePipe.transform(date.setDate(date.getDate() - 1),'MM/dd/yyyy');
    this.products.filterPredicate = (data: any, filter: string) => 
        !filter || data.createdDate.includes(filter);
    const gMapProps = {
      center: new google.maps.LatLng(35.2271, -80.8431),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gMapEl.nativeElement, gMapProps);
  }
  
  filterByDate(filterValue: any) {
    this.filterOption = filterValue;
    this.products.filter = filterValue.trim();
  }

  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
