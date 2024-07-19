/* eslint-disable no-unused-vars */
/* eslint-disable no-empty-function */
import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

export enum BorderColor {
  Blue = '#007BFF',
  Green = '#28A745',
  Yellow = '#FFC107',
  Red = '#DC3545',
  Default = '#2f80ed',
}

@Directive({
  selector: '[appDateBackground]',
  standalone: true,
})
export class DateBackgroundDirective implements OnInit {
  @Input() appDateBackground!: string | undefined;

  private static readonly DAYS_IN_A_WEEK = 7;
  private static readonly DAYS_IN_A_MONTH = 30;
  private static readonly DAYS_IN_SIX_MONTHS = 180;

  // eslint-disable-next-line no-useless-constructor
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) {}

  ngOnInit() {
    const publishedDate = new Date(this.appDateBackground as string);
    const color = this.appDateBackground
      ? this.getBorderColor(publishedDate)
      : BorderColor.Default;

    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  private getBorderColor(publishedDate: Date): string {
    const currentDate = new Date();

    const timeDiff =
      (currentDate.getTime() - publishedDate.getTime()) / (1000 * 3600 * 24); // разница в днях

    switch (true) {
      case timeDiff < DateBackgroundDirective.DAYS_IN_A_WEEK:
        return BorderColor.Blue; // Синий - новее 7 дней
      case timeDiff < DateBackgroundDirective.DAYS_IN_A_MONTH:
        return BorderColor.Green; // Зеленый - от 7 дней до 1 месяца
      case timeDiff < DateBackgroundDirective.DAYS_IN_SIX_MONTHS:
        return BorderColor.Yellow; // Желтый - от 1 до 6 месяцев
      default:
        return BorderColor.Red; // Красный - старше 6 месяцев
    }
  }
}
