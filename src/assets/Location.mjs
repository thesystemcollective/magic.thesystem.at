export const View = () =>
  section({ class: 'location' }, [
    p({ class: 'date' }, '11.07.2020'),
    p({ class: 'time' }, '22:00'),
    p({ class: 'street' }, 'Yppenplatz 5'),
    p({ class: 'district' }, '1160 Wien'),
  ])