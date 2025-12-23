import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  COMPANY_DATA,
  CompanyInfo,
  DICTIONARY_WORDS,
  DictionaryWord,
} from 'src/app/data/dictionary.mock';

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-qaluta-dictionary-contenido',
  templateUrl: './qaluta-dictionary-contenido.component.html',
  styleUrls: ['./qaluta-dictionary-contenido.component.css'],
})
export class QalutaDictionaryContenidoComponent implements OnInit {
  @ViewChild('exportContent') exportContent!: ElementRef;

  // 🔹 ESTE ES EL ESTADO ÚNICO
  currentContent: CompanyInfo | DictionaryWord = COMPANY_DATA;

  searchTerm = '';
  suggestions: (DictionaryWord | CompanyInfo)[] = [];

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const term = params.get('term');

      if (term) {
        this.loadWord(term);
      } else {
        this.currentContent = COMPANY_DATA;
      }
    });
  }

  exportAsPDF() {
  const element = this.exportContent.nativeElement;

  html2canvas(element, { scale: 2, useCORS: true }).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');

    // 📄 A4 horizontal
    const pdf = new jsPDF('l', 'mm', 'a4');

    const pageWidth = 297;
    const pageHeight = 210;

    const margin = 10;

    const imgWidth = pageWidth - margin * 2;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    // 🖼️ Insertar imagen centrada
    pdf.addImage(
      imgData,
      'PNG',
      margin,
      margin,
      imgWidth,
      imgHeight
    );

    // 🖊️ Dibujar borde
    pdf.setLineWidth(0.5);
    pdf.rect(
      5,
      5,
      pageWidth - 10,
      pageHeight - 10
    );

    pdf.save(this.getExportFileName() + '.pdf');
  });
}


  getExportFileName(): string {
    if (this.currentContent.type === 'company') {
      return 'urpi-dictionary';
    }

    return this.currentContent.titleEspanol.toLowerCase();
  }

  // 🔹 CARGA DESDE URL
  private loadWord(term: string) {
    const found = DICTIONARY_WORDS.find(
      (w) =>
        w.titleEspanol.toLowerCase() === term.toLowerCase() ||
        w.titleJaqaru.toLowerCase() === term.toLowerCase()
    );

    if (found) {
      this.currentContent = found;
      this.searchTerm = found.titleEspanol;
    }
  }

  // 🔹 SOLO CAMBIA URL
  search() {
    const value = this.searchTerm.trim().toLowerCase();

    if (!value) return;

    // 🔹 SI BUSCA LA EMPRESA
    if (value === 'urpi dictionary') {
      this.router.navigate(['/qaluta-dictionary']);
      return;
    }

    // 🔹 SI BUSCA UNA PALABRA
    this.router.navigate(['/qaluta-dictionary', value]);
  }

  // 🔹 SUGERENCIAS
  onInputChange(value: string) {
    const v = value.toLowerCase().trim();

    if (!v) {
      this.suggestions = [];
      return;
    }

    const results: (DictionaryWord | CompanyInfo)[] = [];

    // 🔹 EMPRESA
    if (COMPANY_DATA.title.toLowerCase().includes(v)) {
      results.push(COMPANY_DATA);
    }

    // 🔹 PALABRAS
    const words = DICTIONARY_WORDS.filter(
      (w) =>
        w.titleEspanol.toLowerCase().includes(v) ||
        w.titleJaqaru.toLowerCase().includes(v)
    );

    results.push(...words.slice(0, 5));

    this.suggestions = results;
  }

  // 🔹 CLICK EN SUGERENCIA
  selectSuggestion(item: DictionaryWord | CompanyInfo) {
    // 👉 SI ES EMPRESA
    if (item.type === 'company') {
      this.router.navigate(['/qaluta-dictionary']);
      this.suggestions = [];
      return;
    }

    // 👉 SI ES PALABRA
    this.router.navigate([
      '/qaluta-dictionary',
      item.titleEspanol.toLowerCase(),
    ]);

    this.suggestions = [];
  }
}
