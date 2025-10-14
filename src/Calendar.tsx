function Calendar() {
  return (
    <div className="overflow-scroll card">
      <iframe
        src="https://calendar.google.com/calendar/embed?src=rpiroboticsclub%40gmail.com&ctz=America%2FNew_York"
        className="w-256 lg:w-full h-160"
      />
    </div>
  );
}

export default Calendar;
