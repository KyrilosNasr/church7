import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-site-videos-carousel',
  templateUrl: './site-videos-carousel.component.html',
  styleUrls: ['./site-videos-carousel.component.scss']
})
export class SiteVideosCarouselComponent implements OnInit, AfterViewInit {
  @ViewChild('videosContainer') videosContainer: ElementRef;
  constructor(
    private renderer: Renderer2
  ) { }
  isActive = true;
  ngAfterViewInit(): void {

  }
  ngOnInit(): void {
  }

  ids = [
    { id: 'kQobPqE0T5M' },
    { id: 'kQobPqE0T5M' },
    { id: 'kQobPqE0T5M' }
  ]
  videos: { url: string }[] = []

  customOptions: OwlOptions = {
    loop: true,
    items: 1,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    },
    nav: true
  }

  getVideo() {
    let youtubeUrl = 'https://www.youtube.com/embed/'
    this.ids.forEach(el => {
      youtubeUrl += el.id;
      let t = document.getElementById('slide-' + el.id)
      if (t) {
        t.setAttribute('src', youtubeUrl)
      }
      // console.log(t)
    })
  }

  generateFrame() {
    // console.log(this.videosContainer.nativeElement)
    this.ids.forEach(el => {
      let html = `
      <ng-template carouselSlide>
    <iframe width="100%" src="https://www.youtube.com/embed/${el.id}" id="slide-${el.id}" height="315" title="YouTube video player" frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
                  </ng-template>
                  `

      const p: HTMLParagraphElement = this.renderer.createElement('p');;
      p.innerHTML = "add new"
      this.renderer.appendChild(this.videosContainer.nativeElement, p)
    })

  }


}
