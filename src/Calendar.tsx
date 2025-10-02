function Calendar() {
  return (
    <div className="overflow-scroll rounded-2xl drop-shadow-sm/25 drop-shadow-neutral-500">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=rpiroboticsclub%40gmail.com&ctz=America%2FNew_York"
        className="w-256 lg:w-full h-160"
      />
    </div>
  );
}

export default Calendar;
