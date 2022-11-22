const transformDate = (seconds) => {
  const date = new Date(seconds.toMillis());

  const da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(date);
  const mo = new Intl.DateTimeFormat('es', { month: 'numeric' }).format(date);
  const hour = new Intl.DateTimeFormat('es', { hour: '2-digit' }).format(date);
  const min = new Intl.DateTimeFormat('es', { minute: '2-digit' }).format(date);

  return `${da}/${mo} ${hour}:${min}`;
};

export default transformDate;
