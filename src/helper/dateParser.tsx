export const dateParser = (date: string) => {
  const x = date;
  let MM: any = {
    Jan: 'January',
    Feb: 'February',
    Mar: 'March',
    Apr: 'April',
    May: 'May',
    Jun: 'June',
    Jul: 'July',
    Aug: 'August',
    Sep: 'September',
    Oct: 'October',
    Nov: 'November',
    Dec: 'December',
  };

  const xx = String(new Date(x)).replace(
    /\w{3} (\w{3}) (\d{2}) (\d{4}) (\d{2}):(\d{2}):[^(]+\(([A-Z]{3})\)/,
    function ($0, $1, $2, $3, $4, $5, $6) {
      return (
        MM[$1] +
        ' ' +
        $2 +
        ', ' +
        $3 +
        ' - ' +
        ($4 % 12) +
        ':' +
        $5 +
        (+$4 > 12 ? 'PM' : 'AM') +
        ' ' +
        $6
      );
    }
  );
  return xx;
};

export const hourParser = (hour: string) => {
  const hours = hour.split(':')[0];
  const minutes = hour.split(':')[1];

  return `${hours}:${minutes}`;
};
