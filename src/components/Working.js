import * as React from "react"
import Grid from "@material-ui/core/Grid"
import DateFnsUtils from "@date-io/date-fns"
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
  KeyboardTimePicker,
} from "@material-ui/pickers"
import { TextField } from "@material-ui/core"
import CloseIcon from "@mui/icons-material/Close"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"
import Session from "./Session"

export default function Working() {
  const [selectedDate, setSelectedDate] = React.useState(
    new Date("2022-12-07T12:00:00")
  )
  const handleDateChange = (date) => {
    setSelectedDate(date)
  }
  const [session, setSession] = React.useState([])

  const onAddBtnClick = () => {
    setSession(session.concat(<Session key={session.length}/>))
  }
  
  return (
    <>
      <div className="container parent">
        <div className="row">
          {/* col-4 */}
          <div className="col-2 mt-4 w-100 d-inline my-5">
            <div className="text-start my-2">
              <input
                className="mt-4"
                type="checkbox"
                id="scales"
                name="scales"
                checked
              />
              <label for="scales"> day</label>
            </div>
            <div className="text-start my-5">
              <input
                className="mt-4"
                type="checkbox"
                id="scales"
                name="scales"
              />
              <label for="scales"> Monday</label>
            </div>
          </div>
          {/* col-2 */}
          <div className="col-2 text-center my-5">
            <div className="my-5">
              <span className="text-secondary">session 1</span>
            </div>
            <div className="my-5">
              <span className="text-secondary">session 2</span>
            </div>
            <div className="my-5">
              <span className="text-secondary">session 3</span>
            </div>
          </div>
          {/* Open Time */}
          <div className="col-2 mt-3">
            <div className="m-2">
              <span className="text-secondary">Open Time</span>
            </div>
            {/*Open Timer 1 */}
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
            {/* Open Timer 2 */}
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
            {/* Open Timer 3 */}
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
          {/* Close Time */}
          <div className="col-2 mt-3">
            <div className="m-2">
              <span className="text-secondary">Close Time</span>
            </div>
            {/* close time 1*/}
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
            {/* close time 2 */}
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
            {/* close time 3 */}
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
          {/* Max of appointments */}
          <div className="col-2 mt-2">
            <div className="w-100">
              <span className="text-secondary">Max no. of appointments</span>
            </div>
            {/* No of appointments 1 */}
            <div className="mt-4 border border-bg-secondary rounded">
              <Grid justify="center">
                <TextField label="100" />
              </Grid>
            </div>
            {/* No of appointments 2 */}
            <div className="mt-4 border border-bg-secondary rounded">
              <Grid justify="center">
                <TextField label="100" />
              </Grid>
            </div>
            {/* No of appointments 3*/}
            <div className="mt-4 border border-bg-secondary rounded">
              <Grid justify="center">
                <TextField label="Enter no." />
              </Grid>
            </div>
          </div>
          <div className="col-2 mt-5 ">
            <div className="my-5">
              <CloseIcon color="black" />
            </div>
            <div className="my-5">
              <CloseIcon color="black" />
            </div>
            <div className="my-5">
              <CloseIcon color="black" />
            </div>
          </div>
          {/* Tuesday*/}
          <div className="col-2 mt-4 w-100 d-inline my-5">
            <div className="text-start my-5">
              <input
                className="my-5"
                type="checkbox"
                id="scales"
                name="scales"
              />
              <label for="scales"> Tuesday</label>
            </div>
          </div>
          {/* col-2 */}
          <div className="col-2 text-center my-5">
            <div className="my-5">
              <span className="text-secondary">session 1</span>
            </div>
            <div className="my-5">
              <span className="text-secondary">session 2</span>
            </div>
          </div>
          {/* Open Time */}
          <div className="col-2 my-5">
            {/*Open Timer 1 */}
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
            {/* Open Timer 2 */}
            <div className="my-4 border border-bg-secondary rounded">
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
            {/* Add session button */}
            <div className="my-5 bg-gray">
                <Button className="fw-bold text-secondary" variant="outlined" onClick={onAddBtnClick}>
                  Add to Session
                </Button>
                {session}
            </div>
          </div>
          {/* Close Time */}
          <div className="col-2 my-5">
            {/* close time 1*/}
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
            {/* close time 2 */}
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
            {/* close time 3 */}
          </div>
          {/* Max of appointments */}
          <div className="col-2 my-5">
            {/* No of appointments 1 */}
            <div className="mt-4 border border-bg-secondary rounded">
              <Grid justify="center">
                <TextField label="100" />
              </Grid>
            </div>
            {/* No of appointments 2 */}
            <div className="mt-4 border border-bg-secondary rounded">
              <Grid justify="center">
                <TextField label="100" />
              </Grid>
            </div>
            {/* No of appointments 3*/}
          </div>
          <div className="col-2 my-5 ">
            <div className="my-5">
              <CloseIcon color="black" />
            </div>
            <div className="my-5">
              <CloseIcon color="black" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
