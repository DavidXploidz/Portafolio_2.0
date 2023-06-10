import { Component, Input } from '@angular/core';
import { DarkmodeService } from './darkmode.service';
import { MenuMobileService } from './menu-mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'portafolio';

  // public proyectos: any = [];
  selectedTab = 'tab1';
  flagMenu: any = false;

  constructor(public DarkmodeService: DarkmodeService, public MenuMobileService: MenuMobileService ){
    this.flagMenu = this.MenuMobileService;
    
  }
  
  public proyectos: any = [
    {
      id: 1,
      nombre: 'Space Tourism "Real Figma Design" ',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1686376683/SpaceTourism_zn5jik.png',
      enlace: 'https://davidxploidz.github.io/Space-Tourism-Landing/',
      tecnologias: [
        {
          react: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 2,
      nombre: 'Multi Step Form',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1685033404/MultiStepForm_qwgzdg.png',
      enlace: 'https://davidxploidz.github.io/Multi-step-form/',
      tecnologias: [
        {
          react: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 3,
      nombre: 'Jobs Filtering',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1685032990/FilteringPage_z7gxag.png',
      enlace: 'https://davidxploidz.github.io/Job-listings-with-filtering/',
      tecnologias: [
        {
          react: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 4,
      nombre: 'TODO App DarkMode',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1657156358/app-todo_brglg7.png',
      enlace: 'https://davidxploidz.github.io/Todo__app__angular/',
      tecnologias: [
        {
          angular: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 5,
      nombre: 'bookmark landing page',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1674156119/landingprueba_jxcsh4.png',
      enlace: 'https://davidxploidz.github.io/Bookmarking_landing_angular/',
      tecnologias: [
        {
          angular: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 6,
      nombre: 'news home page',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1674156381/news_home_page_kxgjwh.png',
      enlace: 'https://davidxploidz.github.io/News-homepage/',
      tecnologias: [
        {
          html: true,
          css: true,
          js: true,
        }
      ]
    },
    {
      id: 7 ,
      nombre: 'EasyBank Landing Page',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1679499440/easybankiMAGE_vem0in.png',
      enlace: 'https://davidxploidz.github.io/EasyBankLandingPageAngular/',
      tecnologias: [
        {
          html: true,
          css: true,
          angular: true,
        }
      ]
    }

  ]

  ngOnInit(){
    // animado numero
    
  }

  selectTab(tab: string) {
    this.selectedTab = tab;
  }

  cierraMenu(){
    this.MenuMobileService.menuMobile = false;
  }



  


   
}
