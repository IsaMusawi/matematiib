import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SharedModule } from '../shared.module';
import { DataInterface, DataModel } from '../../model/list.model';
import { MatSidenav } from '@angular/material/sidenav';
import { DataUtils } from '../utils/data.utils';

@Component({
  selector: 'app-collapse-pane',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    SharedModule,
  ],
  templateUrl: './collapse-pane.component.html',
  styleUrl: './collapse-pane.component.css'
})

export class CollapsePaneComponent  implements AfterViewInit, OnInit{
  @ViewChild('sidenav') sidenav!: MatSidenav;
  opened: boolean = false;

  constructor(private http: HttpClient, private dataUtils: DataUtils) {}

  listData : DataInterface[] = [];

  showVideoVektor: boolean = false;
  showSoalPembahasanMtk: boolean = false;
  showPptVektor: boolean = false;
  youTubeVideoId: string = "jFL5qH-_98k";

  ngOnInit(): void {
      this.dataUtils.fetchData().subscribe(
        data => this.listData = data,
        error => console.error('Error fetching data:', error)
      );

      console.log(this.listData);
  }

  ngAfterViewInit(){
    console.log(this.sidenav)
  }

  getYoutubeVideoUrl(videoId: string): string {
    return `https://www.youtube.com/embed/${videoId}`
  }

  getGoogleDriveUrl(driveId: string): string {
    return `https://drive.google.com/file/d/${driveId}/preview`
  }

  toggle() {
    if (this.sidenav){
      this.sidenav.toggle();
    } else {
      console.warn('Sidenav is not defined yet');
    }
    
  }
}
