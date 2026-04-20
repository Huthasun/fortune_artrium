import React, { useEffect, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useNavigate } from "react-router-dom";
import client from "../../API/api";
import "../Cards/calender.css";

const Calenderview = () => {
  const navigate = useNavigate();

  const [rooms, setRooms] = useState([]);
  const [events, setEvents] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(
    localStorage.getItem("selectedRoomNo") || null
  );

 // 🔹 Load rooms
useEffect(() => {
  const hotelId = localStorage.getItem("hotelId");

  client
    .get(`/api/room-status?hotelId=${hotelId}`)
    .then(res => setRooms(res.data?.data || []))
    .catch(err => console.log(err));
}, []);

// 🔹 Load bookings
useEffect(() => {
  const hotelId = localStorage.getItem("hotelId");

  client.get(`/bookings/calendar?hotelId=${hotelId}&t=${Date.now()}`)

    .then(res => {
      const bookings = res.data?.data || [];

   const formattedEvents = bookings.map(b => {
  const start = new Date(b.checkInDateTime);
  const end = new Date(b.checkOutDateTime);

  end.setDate(end.getDate() + 1);

  const days = Math.ceil(
    (end - start) / (1000 * 60 * 60 * 24)
  );

  // 🔥 duration based class
  let durationClass = "booking-1day";
  if (days === 2) durationClass = "booking-2day";
  else if (days >= 3 && days <= 4) durationClass = "booking-3to4day";
  else if (days >= 5) durationClass = "booking-5plus";

  return {
    title: `Room ${b.roomNo}`,
    start,
    end,
    allDay: true,
    className: `booking-event ${durationClass}`,
    extendedProps: {
      roomNo: b.roomNo,
      from: b.checkInDateTime,
      to: b.checkOutDateTime,
      days
    }
  };
});


      setEvents(formattedEvents);
    })
    .catch(err => console.log(err));
}, []);


  //ROOM SELECT → SAVE AS "roomNo"
  const handleRoomSelect = (roomNo) => {
    setSelectedRoom(roomNo);
    localStorage.setItem("roomNo", roomNo);
  };

  // ✅ DATE CLICK
  const handleDateClick = (info) => {
    const roomNo = localStorage.getItem("roomNo");

    if (!roomNo) {
      alert("Select room first");
      return;
    }

    navigate("/app/register", {
      state: {
        roomNo,
        checkInDate: info.dateStr,
        checkOutDate: info.dateStr
      }
    });
  };

  return (
    <div className="calendar-page">

      <h2 className="title">Advance Booking</h2>

      {/* ROOMS */}
      <div className="rooms-row">
        {rooms.map(r => (
          <button
            key={r.roomNo}
           className={`room ${String(selectedRoom) === String(r.roomNo) ? "active" : ""}`}
            onClick={() => handleRoomSelect(r.roomNo)}
          >
            {r.roomNo}
          </button>
        ))}
      </div>

      {/* CALENDAR */}
    <FullCalendar
  plugins={[dayGridPlugin, interactionPlugin]}
  initialView="dayGridMonth"
  events={events}
  dateClick={handleDateClick}
  height="auto"

  headerToolbar={{
  left: "prev,next",
  center: "title",
  right: "dayGridMonth,dayGridWeek"
}}

buttonIcons={{
  prev: "chevron-left",
  next: "chevron-right",
  dayGridMonth: "calendar",
  dayGridWeek: "grid"
}}
  titleFormat={{
    month: "short",
    year: "numeric"
  }}


  eventMouseEnter={(info) => {
    const tooltip = document.createElement("div");
    tooltip.className = "fc-tooltip";
    tooltip.innerHTML = `
      <strong>Room ${info.event.extendedProps.roomNo}</strong><br/>
      From: ${new Date(info.event.extendedProps.from).toDateString()}<br/>
      To: ${new Date(info.event.extendedProps.to).toDateString()}<br/>
      <b>Days: ${info.event.extendedProps.days}</b>
    `;
    document.body.appendChild(tooltip);

    info.el._tooltip = tooltip;

    info.el.addEventListener("mousemove", (e) => {
      tooltip.style.left = e.pageX + 15 + "px";
      tooltip.style.top = e.pageY + 15 + "px";
    });
  }}

  eventMouseLeave={(info) => {
    if (info.el._tooltip) {
      info.el._tooltip.remove();
      info.el._tooltip = null;
    }
  }}
/>



    </div>
  );
};

export default Calenderview;
