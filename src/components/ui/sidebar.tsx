import React from "react";
import Dashboard from "./Dashboard";
import Department from "./Department";
import Doctor from "./Doctor";
import Patients from "./Patients";
import Schedule from "./Schedule";
import Appointment from "./Appointment";
import Pharmacy from "./Pharmacy";
import Inventory from "./Inventory";
import Bed from "./Bed";

function sidebar() {
  return <div className="h-full w-56 bg-slate-600">
    <Dashboard></Dashboard>
    <Department></Department>
    <Doctor></Doctor>
    <Bed></Bed>
    <Patients></Patients>
    <Schedule></Schedule>
    <Appointment></Appointment>
    <Pharmacy></Pharmacy>
    <Inventory></Inventory>
  </div>;
}

export default sidebar;
