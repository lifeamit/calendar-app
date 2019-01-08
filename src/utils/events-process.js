const sortEventsByStartTime = events => {
  return events.sort((e1, e2) => {
    const d1 = new Date(e1.launch_date);
    const d2 = new Date(e2.launch_date);

    return d1.getTime() - d2.getTime();
  });
};

export const arrangeEventsByDate = events => {
  var dateMap = {};

  for (const event of events) {
    const eventTimeStamp = event["launch_date"];
    const [eventDate] = eventTimeStamp.split(" ");
    dateMap[eventDate] = dateMap[eventDate] || [];
    dateMap[eventDate].push(event);
  }

  // Sort the events
  for (const date in dateMap) {
    dateMap[date] = sortEventsByStartTime(dateMap[date]);
  }

  return dateMap;
};


