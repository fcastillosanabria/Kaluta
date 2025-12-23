import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DICTIONARY_WORDS, DictionaryWord } from '../data/dictionary.mock';

@Injectable({
  providedIn: 'root',
})
export class DictionaryService {
  searchWord(term: string): Observable<DictionaryWord | null> {
    const value = term.toLowerCase();

    const word = DICTIONARY_WORDS.find(
      (w) =>
        w.titleEspanol.toLowerCase() === value ||
        w.titleJaqaru.toLowerCase() === value
    );

    return of(word ?? null);
  }

  getSuggestions(term: string): Observable<DictionaryWord[]> {
    if (!term.trim()) {
      return of([]);
    }

    const value = term.toLowerCase();

    const results = DICTIONARY_WORDS.filter(
      (w) =>
        w.titleEspanol.toLowerCase().includes(value) ||
        w.titleJaqaru.toLowerCase().includes(value)
    ).slice(0, 6);

    return of(results);
  }
}
