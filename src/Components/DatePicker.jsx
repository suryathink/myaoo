import React, { useState } from "react";
import moment, { MomentInput } from "moment";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";

// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import TextField from "@mui/material/TextField";

export default function BasicDatePicker() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div style={{ margin: "20px" }}>
      <div className="dates">
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <DatePicker
            label="Controlled picker"
            value={selectedDate}
            format="DD MMMM YYYY"
            onChange={(date) => {
              setSelectedDate(date); // Update the selected date in the state
              console.log("Selected Date:", date.format("DD MMMM YYYY"));
            }}
          />
        </LocalizationProvider>
      </div>
      <p>
        Selected Date:{" "}
        {selectedDate ? selectedDate.format("DD MMMM YYYY") : "None"}
      </p>
    </div>
  );
}
