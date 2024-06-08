import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeUrlPipe } from '../safe-url.pipe';
import { HttpClient } from '@angular/common/http';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { SharedModule } from '../shared.module';
import { DataModel } from '../../model/list.model';

@Component({
  selector: 'app-collapse-pane',
  standalone: true,
  imports: [
    YouTubePlayerModule,
    SharedModule,
  ],
  templateUrl: './collapse-pane.component.html',
  styleUrl: './collapse-pane.component.scss'
})

export class CollapsePaneComponent {
  showVideoVektor: boolean = false;
  showSoalPembahasanMtk: boolean = false;
  showPptVektor: boolean = false;
  youTubeVideoId: string = "jFL5qH-_98k";
  listVideo: DataModel[] = [
    {Title: "Video Vector", Url: "jFL5qH-_98k", IsVideo: true},
    {Title: "Soal dan Pembahasan Materi Matematika ", Url: "https://drive.google.com/file/d/1zdzfPyjuFIPEyM_F5VJqVXH7NFO2WSLT/preview", IsVideo: false},
  ]

  constructor(private http: HttpClient) {}

  toggleVideo(){
    this.showVideoVektor = !this.showVideoVektor;
    console.log(this.showPptVektor);
  }

  getYoutubeVideoUrl(videoId: string): string{
    return `https://www.youtube.com/embed/${videoId}`
  }
}
