import { DateTime } from 'luxon';

const { DateTimeFormat } = Intl;

export function getCurrentISODate (): string {
  return DateTime.local().toISODate();
}

export function getCurrentDate (): Date {
  return DateTime.local().toJSDate();
}

export function toDate (inp: string, format = 'yyyy-MM-dd'): Date {
  return DateTime.fromFormat(inp, format).toJSDate();
}

export function toCurrentTimezone (date: string): Date {
  const timezone = DateTimeFormat()?.resolvedOptions()?.timeZone ?? 'America/Sao_Paulo';

  return DateTime.fromISO(date).setZone(timezone).toJSDate();
}

export function formatDate (date: Date, format: string = 'yyyy-MM-dd') {
  return DateTime.fromJSDate(date).toFormat(format);
}

export function createISODate (date: string): DateTime {
  return DateTime.fromISO(date);
}

export function formatISODate (date: string, format: string, locale:string = 'pt-BR'): string {
  return DateTime.fromISO(date).setLocale(locale).toFormat(format);
}

export function formatCurrentTimezone (date: string, format: string = 'yyyy-MM-dd'): string {
  const currentTimezone = toCurrentTimezone(date);

  return DateTime.fromJSDate(currentTimezone).toFormat(format);
}

export function changeFormat (date: string, from: string, to: string) {
  return DateTime.fromFormat(date, from).toFormat(to);
}

export function convertUnixTime (unix: number) {
  const unixParsed = Number(unix);

  const unixConverted = DateTime.fromSeconds(unixParsed, {
    zone: 'utc',
    locale: 'pt-BR',
  });

  return unixConverted.toLocaleString(DateTime.DATETIME_SHORT);
}

export function addMonth (date: DateTime, month: number): Date {
  return date.plus({ month }).toJSDate();
}

export function diffInSeconds (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'seconds').seconds;
}

export function diffInMinutes (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'minutes').minutes;
}

export function diffInHours (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'hours').hours;
}

export function diffInDays (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'days').days;
}

export function diffInMonths (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'months').months;
}

export function diffInYears (start: Date, end: Date): number {
  return DateTime.fromJSDate(end).diff(DateTime.fromJSDate(start), 'years').years;
}

export function formatDateRange (startAt: Date, endAt: Date): string {
  const startISO = (startAt instanceof Date) ? startAt.toISOString() : startAt;
  const endISO = (endAt instanceof Date) ? endAt.toISOString() : endAt;

  const start = DateTime.fromISO(startISO).setLocale('pt-BR');
  const end = DateTime.fromISO(endISO).setLocale('pt-BR');

  const formattedDate = start.toFormat('d \'de\' LLLL \'de\' yyyy');
  const startHour = start.toFormat('HH:mm');
  const endHour = end.toFormat('HH:mm');

  return `${formattedDate} - ${startHour} às ${endHour}`;
}
