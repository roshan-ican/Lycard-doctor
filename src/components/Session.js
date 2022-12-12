import React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
} from "@material-ui/pickers"
import { TextField } from "@material-ui/core"
import CloseIcon from "@mui/icons-material/Close"

export default function Session() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2022-12-07T12:00:00")
  )
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  return (
    <div className="container">
      <div className="row">
        {/* open */}
        <div className="col-2 my-5">
          <div className="mt-4 border border-bg-secondary rounded">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="center">
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {/* close  */}
        <div className="col-2 my-5">
          <div className="mt-4 border border-bg-secondary rounded">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify="center">
                <KeyboardTimePicker
                  margin="normal"
                  id="time-picker"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    "aria-label": "change",
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
          </div>
        </div>
        {/* appointment */}
        <div className="col-2 my-5">
          <div className="my-4 border border-bg-secondary rounded">
            <Grid justify="center">
              <TextField label="100" />
            </Grid>
          </div>
        </div>
        {/* close button */}
        <div className="col-2 my-5">
          <div className="my-5">
              <CloseIcon color="black" />
            </div>
        </div>
      </div>
    </div>
  )
}
