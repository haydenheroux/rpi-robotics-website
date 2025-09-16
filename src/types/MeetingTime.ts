export default interface MeetingTime {
  day: string;
  start: string;
  end?: string;
}

export const meetingTimeText = (time: MeetingTime) =>
  `${time.day} ${time.start}${time.end ? "–" : ""}${time.end ?? ""}`;

export const meetingTimeHover = meetingTimeText;
