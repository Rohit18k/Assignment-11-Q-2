import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService {
  CountCapital(input: string): number {
    let count = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] >= 'A' && input[i] <= 'Z') {
        count++;
      }
    }
    return count;
  }
}
