import { Component } from '@angular/core';

@Component({
  selector: 'app-qaluta-dictionary-contenido',
  templateUrl: './qaluta-dictionary-contenido.component.html',
  styleUrls: ['./qaluta-dictionary-contenido.component.css'],
})
export class QalutaDictionaryContenidoComponent {
  word = {
    title: 'Urpi Dictionary',
    description: `
      La Fundación Wikimedia (en inglés: Wikimedia Foundation, Inc.) (abreviada como WMF) es una organización sin fines de lucro estadounidense con sede en San Francisco, California, y registrada allí como una fundación benéfica.5​ Es la anfitriona de Wikipedia, el séptimo sitio web más visitado del mundo. También alberga otros catorce proyectos similares y apoya el desarrollo de MediaWiki, el software wiki que sustenta a todos ellos.6​7​8​ La Fundación fue establecida en 2003 en San Petersburgo, Florida, por Jimmy Wales, como una forma sin fines de lucro para financiar sus proyectos wiki de colaboración masiva.9​ Anteriormente, estos habían sido alojados por Bomis, la empresa con fines de lucro de Wales.9​

La Fundación Wikimedia (en inglés: Wikimedia Foundation, Inc.) (abreviada como WMF) es una organización sin fines de lucro estadounidense con sede en San Francisco, California, y registrada allí como una fundación benéfica.5​ Es la anfitriona de Wikipedia, el séptimo sitio web más visitado del mundo. También alberga otros catorce proyectos similares y apoya el desarrollo de MediaWiki, el software wiki que sustenta a todos ellos.6​7​8​ La Fundación fue establecida en 2003 en San Petersburgo, Florida, por Jimmy Wales, como una forma sin fines de lucro para financiar sus proyectos wiki de colaboración masiva.9​ Anteriormente, estos habían sido alojados por Bomis, la empresa con fines de lucro de Wales.9​
    `,
    image: 'assets/img/logoUrpiDictionaryBlanco.png',
    info: {
      tipo: 'Organización sin fines de lucro y asociación caritativa',
      fundacion: 'Cañete, Lima (Perú) – 20 de junio de 2003',
      fundador: 'Francis Castillo Sanabria',
      desarrolladores: 'Francis Castillo Sanabria',
      web: 'https://urpidictionary.com',
      facebook: 'https://facebook.com',
      instagram: 'https://instagram.com',
      youtube: 'https://youtube.com',
    },
  };
}
