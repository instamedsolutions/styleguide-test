/**
 * Helper function to ensure that a date is really a UTC date
 */
export type UTCDateType = (utcdate: string|number[]) => Date;
const UTCDate: UTCDateType = (utcdate) => {
  const temp = typeof utcdate === 'string'
    ? new Date(utcdate)
    : new Date(utcdate[0], utcdate[1], utcdate[2], utcdate[3], utcdate[4], utcdate[5]);

  const [y, m, d, h, min, s] = [
    temp.getFullYear(),
    temp.getMonth(),
    temp.getDate(),
    temp.getHours(),
    temp.getMinutes(),
    temp.getSeconds()
  ];

  const date = new Date(Date.UTC(y, m, d, h, min, s));
  date.setHours(date.getUTCHours());

  return date;
};

export default UTCDate;
