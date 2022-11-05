import { Component, Output, ViewChild } from "@angular/core";
import { Router } from '@angular/router';
import {
  ApexNonAxisChartSeries,
  ChartComponent,
  ApexResponsive,
  ApexChart,
  ApexAxisChartSeries,
  ApexTitleSubtitle,
  ApexDataLabels,
  ApexLegend,
  ApexFill,
  ApexMarkers,
  ApexYAxis,
  ApexXAxis,
  ApexTooltip,
  ApexStroke,
  ApexPlotOptions
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  yaxis: ApexYAxis;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  tooltip: ApexTooltip;
  fill: ApexFill;
  legend: ApexLegend;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  menuExpand = true;
  //@ViewChild("chart") chart: ChartComponent;
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions!: Partial<ChartOptions> | any;
  public chartOptions1!: Partial<ChartOptions> | any;
  public chartOptions2!: Partial<ChartOptions> | any;
  public chartOptions3!: Partial<ChartOptions> | any;
  public chartOptions4!: Partial<ChartOptions> | any;
  public chartOptions5!: Partial<ChartOptions> | any;
  public chartOptions6!: Partial<ChartOptions> | any;
  val:any;

  ngOnInit(){
    console.log(this.chartOptions4)
  }
  constructor(public router:Router) {
    this.chartOptions = {
      series: [70],
      chart: {
        height: 150,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"]
    };

    this.chartOptions1 = {
      series: [40],
      chart: {
        height: 150,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"]
    };
    this.chartOptions2 = {
      series: [80],
      chart: {
        height: 150,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"]
    };

    this.chartOptions3 = {
      series: [20],
      chart: {
        height: 150,
        type: "radialBar"
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: "70%"
          }
        }
      },
      labels: ["Cricket"]
    };

    this.chartOptions4 = {
      series: [44, 55],
      chart: {
        width: 350,
        type: "donut"
      },
      legend:{
        show:false
      },
      labels: ["Team A", "Team B"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 500
            },
          }
        }
      ]
    };

    this.chartOptions5 = {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4]
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Fiction Books Sales"
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function(val:any) {
            return val + "K";
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      }
    };

    this.chartOptions6 = {
      series: [
        {
          name: "Marine Sprite",
          data: [44, 55, 41, 37, 22, 43, 21]
        },
        {
          name: "Striking Calf",
          data: [53, 32, 33, 52, 13, 43, 32]
        },
        {
          name: "Tank Picture",
          data: [12, 17, 11, 9, 15, 11, 20]
        },
        {
          name: "Bucket Slope",
          data: [9, 7, 5, 8, 6, 9, 4]
        },
        {
          name: "Reborn Kid",
          data: [25, 12, 19, 32, 25, 24, 10]
        }
      ],
      chart: {
        type: "bar",
        height: 350,
        stacked: true
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      stroke: {
        width: 1,
        colors: ["#fff"]
      },
      title: {
        text: "Fiction Books Sales"
      },
      xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
        labels: {
          formatter: function(val:any) {
            return val + "K";
          }
        }
      },
      yaxis: {
        title: {
          text: undefined
        }
      },
      tooltip: {
        y: {
          formatter: function(val:any) {
            return val + "K";
          }
        }
      },
      fill: {
        opacity: 1
      },
      legend: {
        position: "bottom",
        horizontalAlign: "left",
        offsetX: 40
      }
    };
  }
  reloadComponent(self:boolean,urlToNavigateTo ?:string){
    //skipLocationChange:true means dont update the url to / when navigating
   console.log("Current route I am on:",this.router.url);
   const url=self ? this.router.url :urlToNavigateTo;
   this.router.navigateByUrl('/',{skipLocationChange:true}).then(()=>{
     this.router.navigate([`/${url}`]).then(()=>{
       console.log(`After navigation I am on:${this.router.url}`)
     })
   })
 }
  onSideBarClick(event:boolean){
    this.menuExpand = event;
    this.reloadComponent(true);
  }
}
