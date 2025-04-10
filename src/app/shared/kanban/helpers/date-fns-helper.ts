// import {
//   add,
//   format,
//   formatDistance,
//   formatDistanceStrict,
//   type Month,
//   parseISO as parseISOFns,
//   toDate as toDateFns,
// } from 'date-fns';
import { add } from 'date-fns/add';
import { format } from 'date-fns/format';
import { formatDistance } from 'date-fns/formatDistance';
import { formatDistanceStrict } from 'date-fns/formatDistanceStrict';
import { type Month } from 'date-fns/types';
import { parseISO as parseISOFns } from 'date-fns/parseISO';
import { toDate as toDateFns } from 'date-fns/toDate';

import { ptBR } from 'date-fns/locale/pt-BR';

export interface FormatDistance {
  date: Date;
  baseDate?: Date;
  addSuffix?: boolean;
}

export class DateFnsHelper {
  private static readonly DEFAULT_FORMAT = "d 'de' MMMM 'de' yyyy";

  static formatDistance({
    date,
    baseDate = new Date(),
    addSuffix = false,
  }: FormatDistance): string {
    return formatDistance(date, baseDate, {
      addSuffix,
      locale: ptBR,
    });
  }
  static formatDistanceStrict({
    date,
    baseDate = new Date(),
    addSuffix = false,
  }: FormatDistance): string {
    return formatDistanceStrict(date, baseDate, {
      addSuffix,
      locale: ptBR,
      unit: 'day',
    });
  }

  static parseISO(argument: string): Date | null {
    try {
      return parseISOFns(argument);
    } catch (error) {
      console.error(`Erro ao converter string para data: ${argument}`, error);
      return null;
    }
  }
  static toDate(argument: string | number | Date): Date | string {
    try {
      return toDateFns(argument);
    } catch {
      console.error(`Erro ao converter argumento para data: ${argument}`);
      return '';
    }
  }

  static format(
    date: Date | string | number,
    formatStr: string = DateFnsHelper.DEFAULT_FORMAT
  ): string {
    if (!date) {
      console.warn('Data inválida fornecida para formatação');
      return 'Data inválida';
    }

    return format(date, formatStr, {
      locale: ptBR,
    });
  }

  static addTime(
    date: Date,
    amount: number,
    unit:
      | 'seconds'
      | 'minutes'
      | 'hours'
      | 'days'
      | 'weeks'
      | 'months'
      | 'years'
  ): Date {
    return add(date, { [unit]: amount });
  }

  static getMonthNamesFromMonthNumber(number: number): string {
    if (!Number.isInteger(number) || number < 0 || number > 11) {
      console.warn(`Número do mês inválido: ${number}`);
      return 'Mês desconhecido';
    }

    const monthName = ptBR.localize.month(number as Month, { width: 'wide' });

    return monthName.charAt(0).toUpperCase() + monthName.slice(1).toLowerCase();
  }
}
