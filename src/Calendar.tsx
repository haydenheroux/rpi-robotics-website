import { useContent } from "./contexts/ContentContext";

function Calendar() {
  const { content } = useContent();

  return (
    <div className="overflow-scroll card">
      <iframe src={content.calendar} className="w-256 lg:w-full h-160" />
    </div>
  );
}

export default Calendar;
