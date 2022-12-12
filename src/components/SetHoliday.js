import { useState } from "react"
import { Button } from "./Button"
import Holiday from "./Holiday"

export default function SetHoliday() {
  return (
    <div className="d-flex flex-column bd-highlight mb-3">
      <div className="font-semibold text-secondary">
        <h3>Select other custom holiday</h3>
      </div>
      <Holiday />
      <Holiday />
      <Holiday />
      <Button className="text-primary" color="gray" text="+ Add Holiday" />
    </div>
  )
}
