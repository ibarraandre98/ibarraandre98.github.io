import { Component, OnInit } from '@angular/core';
import {
  faFile,
  faPlus,
  faPenRuler,
  faLaptopCode,
  faMicrochip,
  faCode,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faGooglePlay,
  faLinkedin,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit {
  public faFile = faFile;
  public faGithub = faGithub;
  public faLinkedin = faLinkedin;
  public faYoutube = faYoutube;
  public faPlus = faPlus;
  public faPenRuler = faPenRuler;
  public faLaptopCode = faLaptopCode;
  public faMicrochip = faMicrochip;
  public faCode = faCode;
  public faGooglePlay = faGooglePlay;

  public resumePath = 'assets/resume/resumeEnglish.pdf';

  public aboutMeArray = [
    {
      img: 'assets/personal_skills/autodidacta.png',
      par: 'ABOUT_ME.SKILLS.SELF_TAUGHT',
    },
    {
      img: 'assets/personal_skills/autonomia.png',
      par: 'ABOUT_ME.SKILLS.AUTONOMY',
    },
    {
      img: 'assets/personal_skills/liderazgo.png',
      par: 'ABOUT_ME.SKILLS.LEADERSHIP',
    },
    {
      img: 'assets/personal_skills/proactivo.png',
      par: 'ABOUT_ME.SKILLS.PROACTIVE',
    },
    {
      img: 'assets/personal_skills/reloj.png',
      par: 'ABOUT_ME.SKILLS.DOWNTIME_WORK',
    },
    {
      img: 'assets/personal_skills/workteam.png',
      par: 'ABOUT_ME.SKILLS.TEAM_WORK',
    },
  ];

  public developerArray = [
    {
      img: 'assets/developer/ts.png',
      par: 'ABOUT_ME.LANGUAGES.TYPESCRIPT',
    },
    {
      img: 'assets/developer/kotlin.png',
      par: 'ABOUT_ME.LANGUAGES.KOTLIN',
    },
    {
      img: 'assets/developer/js.png',
      par: 'ABOUT_ME.LANGUAGES.JAVASCRIPT',
    },
    {
      img: 'assets/developer/java.png',
      par: 'ABOUT_ME.LANGUAGES.JAVA',
    },
    {
      img: 'assets/developer/html.png',
      par: 'ABOUT_ME.LANGUAGES.HTML',
    },
    {
      img: 'assets/developer/scss2.png',
      par: 'ABOUT_ME.LANGUAGES.SCSS',
    },
    {
      img: 'assets/developer/css3.webp',
      par: 'ABOUT_ME.LANGUAGES.CSS',
    },
    {
      img: 'assets/developer/csharp.png',
      par: 'ABOUT_ME.LANGUAGES.CSHARP',
    },
    {
      img: 'assets/developer/sql.png',
      par: 'ABOUT_ME.LANGUAGES.SQL',
    },
    {
      img: 'assets/developer/php.png',
      par: 'ABOUT_ME.LANGUAGES.PHP',
    },
    {
      img: 'assets/developer/cplusplus.png',
      par: 'ABOUT_ME.LANGUAGES.CPLUSPLUS',
    },
  ];

  public frameworksArray = [
    {
      img: 'assets/frameworks/angular.png',
      par: 'ABOUT_ME.FRAMEWORKS.ANGULAR',
    },
    {
      img: 'assets/frameworks/ionic.png',
      par: 'ABOUT_ME.FRAMEWORKS.IONIC',
    },
    {
      img: 'assets/frameworks/bootstrap.png',
      par: 'ABOUT_ME.FRAMEWORKS.BOOTSTRAP',
    },
    {
      img: 'assets/frameworks/as.webp',
      par: 'ABOUT_ME.FRAMEWORKS.ANDROID_STUDIO',
    },
    {
      img: 'assets/frameworks/supabase.png',
      par: 'ABOUT_ME.FRAMEWORKS.SUPABASE',
    },
    {
      img: 'assets/frameworks/firebase.png',
      par: 'ABOUT_ME.FRAMEWORKS.FIREBASE',
    },
    {
      img: 'assets/frameworks/net.png',
      par: 'ABOUT_ME.FRAMEWORKS.NET_CORE',
    },
    {
      img: 'assets/frameworks/sqlserver.png',
      par: 'ABOUT_ME.FRAMEWORKS.SQL_SERVER',
    },
    {
      img: 'assets/frameworks/mysql.png',
      par: 'ABOUT_ME.FRAMEWORKS.MYSQL',
    },
    {
      img: 'assets/frameworks/vue.png',
      par: 'ABOUT_ME.FRAMEWORKS.VUE',
    },
    {
      img: 'assets/frameworks/quasar.png',
      par: 'ABOUT_ME.FRAMEWORKS.QUASAR',
    },
  ];

  public toolsArray = [
    {
      img: 'assets/extra_tools/git.png',
      par: 'ABOUT_ME.TOOLS.GIT',
    },
    {
      img: 'assets/extra_tools/nodejs.png',
      par: 'ABOUT_ME.TOOLS.NODEJS',
    },
    {
      img: 'assets/extra_tools/google-cloud-platform.png',
      par: 'ABOUT_ME.TOOLS.GOOGLE_CLOUD',
    },
    {
      img: 'assets/extra_tools/azure.png',
      par: 'ABOUT_ME.TOOLS.MICROSOFT_AZURE',
    },
    {
      img: 'assets/extra_tools/amazon.png',
      par: 'ABOUT_ME.TOOLS.AWS',
    },
    {
      img: 'assets/extra_tools/crashlytics.png',
      par: 'ABOUT_ME.TOOLS.CRASHLYTICS',
    },
    {
      img: 'assets/extra_tools/marketing-cloud.png',
      par: 'ABOUT_ME.TOOLS.MARKETING_CLOUD',
    },
    {
      img: 'assets/extra_tools/amplitude.png',
      par: 'ABOUT_ME.TOOLS.AMPLITUDE_SDK',
    },
    {
      img: 'assets/extra_tools/meta.png',
      par: 'ABOUT_ME.TOOLS.META_SDK',
    },
    {
      img: 'assets/extra_tools/leanplum.png',
      par: 'ABOUT_ME.TOOLS.LEANPLUM',
    },
  ];

  public achievementsArray = [
    {
      src: 'assets/achievements/titulo.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/reconocimientoprimerlugargen.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/reconocimientoprimerlugarcar.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/certificadoestudiostec.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/reconocimientotec.png',
      alt: '',
    },
    {
      src: 'assets/achievements/constancia-verano.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciaverano.png',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciatamcoder.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/reconocimientocodingcup.png',
      alt: '',
    },
    {
      src: 'assets/achievements/reconocimientocbtis.png',
      alt: '',
    },
    {
      src: 'assets/achievements/acreditacionms.png',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciahbuild1.png',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciahbuild.png',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciainglesparatodos.png',
      alt: '',
    },
    {
      src: 'assets/achievements/congreso.jpg',
      alt: '',
    },
    {
      src: 'assets/achievements/constanciaofimatica.jpg',
      alt: '',
    },
  ];

  public coursesArray = [
    {
      src: 'assets/courses/dataScience.png',
      alt: '',
    },
    {
      src: 'assets/courses/NPrivacidadDatos.png',
      alt: '',
    },
    {
      src: 'assets/courses/NConcientizacionSeguridad.png',
      alt: '',
    },
    {
      src: 'assets/courses/NAnalisisDinamico.png',
      alt: '',
    },
    {
      src: 'assets/courses/NDataSecurity.png',
      alt: '',
    },
    {
      src: 'assets/courses/NDesarrolloSeguro.png',
      alt: '',
    },
    {
      src: 'assets/courses/NMetodologiaDesarrollo.png',
      alt: '',
    },
    {
      src: 'assets/courses/NSecureCoding.png',
      alt: '',
    },
    {
      src: 'assets/courses/hourcode.png',
      alt: '',
    },
    {
      src: 'assets/courses/certificadoAngular5.png',
      alt: '',
    },
    {
      src: 'assets/courses/certificadohtml.png',
      alt: '',
    },
    {
      src: 'assets/courses/certificadosqludemy.png',
      alt: '',
    },
    {
      src: 'assets/courses/cursoudemybootsrap.jpg',
      alt: '',
    },
    {
      src: 'assets/courses/cursoudemyjs.jpg',
      alt: '',
    },
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }
    });
  }
  ngOnInit(): void {
    if (localStorage.getItem('language') == 'en') {
      this.resumePath = 'assets/resume/resumeEnglish.pdf';
    } else if (localStorage.getItem('language') == 'es') {
      this.resumePath = 'assets/resume/resume.pdf';
    }
  }
}
