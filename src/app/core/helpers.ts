export const isDateExpired = (date: Date) => new Date(date).valueOf() < new Date().valueOf();

