"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, {
  Draggable,
  DropArg,
} from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";

export default function Calendar() {
  // const handleDateClick = (arg) => {
  //   console.log(arg);

  // };
  return (
    <div>
      <div className="p-16 w-[24cm] h-[23cm]">
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, timeGridPlugin]}
          headerToolbar={{
            left: "prev,next, today",
            center: "title",
            // right: "resourceTimelineWeek,dayGridMonth,timeGridWeek",
            right: "dayGridMonth,timeGridWeek",
          }}
          // events={{}}
          nowIndicator={true}
          editable={true}
          droppable={true}
          selectable={true}
          selectMirror={true}
          // dateClick={handleDateClick}
          // drop={}
          // eventClick={}
        />
      </div>
    </div>
  );
}
