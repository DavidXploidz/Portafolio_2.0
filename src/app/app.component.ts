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
      nombre: 'Photo stock (pixabay api)',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1657386403/photo-stock_jailke.png',
      enlace: 'https://davidxploidz.github.io/Photo-stock/',
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
      nombre: 'Blog de Café',
      imagen: 'https://res.cloudinary.com/dypooembo/image/upload/v1656094840/cafe_setsml.png',
      enlace: 'https://blogcaferesponsivez.netlify.app/',
      tecnologias: [
        {
          js: true,
          html: true,
          css: true,
        }
      ]
    },
    {
      id: 3,
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
      id: 4,
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
      id: 5,
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
      id: 6 ,
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
