/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appDateBackground]',
  standalone: true,
})
export class DateBackgroundDirective implements OnInit {
  @Input() appDateBackground!: string | undefined;

  // eslint-disable-next-line no-useless-constructor
  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.appDateBackground) {
      const publishedDate = new Date(this.appDateBackground as string); // Утверждение типа
      this.el.nativeElement.style.backgroundColor =
        this.getBorderColor(publishedDate);
    } else {
      // Обработка случая, когда дата не предоставлена
      this.el.nativeElement.style.backgroundColor = '#2f80ed'; // или любой другой дефолтный цвет
    }
  }

  private getBorderColor(publishedDate: Date): string {
    const currentDate = new Date();
    // eslint-disable-next-line operator-linebreak
    const timeDiff =
      (currentDate.getTime() - publishedDate.getTime()) / (1000 * 3600 * 24); // разница в днях

    if (timeDiff < 7) {
      return '#007BFF'; // Синий - новее 7 дней
    }

    if (timeDiff < 30) {
      return '#28A745'; // Зеленый - от 7 дней до 1 месяца
    }

    if (timeDiff < 180) {
      return '#FFC107'; // Желтый - от 1 до 6 месяцев
    }

    if (timeDiff > 180) {
      return '#DC3545'; // Красный - старше 6 месяцев
    }
    return '#2f80ed';
  }
}
