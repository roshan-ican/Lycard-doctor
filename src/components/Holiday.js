import React, { useState } from "react"
import "date-fns"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers"
import CloseIcon from "@mui/icons-material/Close"

export default function Holiday(props) {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2022-12-07T12:00:00")
  )
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  return (
    <>
      <div className="holiday d-grid col container">
        <div className="row">
          <div className="start-date col-md-4 border border-bg-secondary rounded">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="start">
                <KeyboardDatePicker
                  // disableToolbar
                  variant="dialog"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="1"
                  label="Start date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
                {/* <h5>X</h5> */}
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          {/* End Date */}
          <div class="end-date col-md-4 border border-bg-secondary rounded">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="start">
                <KeyboardDatePicker
                  // disableToolbar
                  variant="dialog"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="2"
                  label="End date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change date",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
          <div className="mt-5 col-md-2">
            <CloseIcon color="black" />
          </div>
          {/* X Close Button */}
        </div>
      </div>
    </>
  )
}
