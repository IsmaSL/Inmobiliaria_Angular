import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})

export class GalleryComponent implements OnInit {
  images: any[];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '960px',
      numVisible: 4
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];

  constructor() {
    this.images = [
      { previewImageSrc: 'c_01.jpg', thumbnailImageSrc: 'c_01.jpg' },
      { previewImageSrc: 'in_02.jpg', thumbnailImageSrc: 'in_02.jpg' },
      { previewImageSrc: 'fd_01.jpg', thumbnailImageSrc: 'fd_01.jpg' },
      { previewImageSrc: 'fe_01.jpg', thumbnailImageSrc: 'fe_01.jpg' },
      { previewImageSrc: 'fr_01.jpg', thumbnailImageSrc: 'fr_01.jpg' }
    ]
  }

  ngOnInit() { }
}
