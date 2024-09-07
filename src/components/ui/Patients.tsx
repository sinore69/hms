import Link from "next/link";
import React from "react";

function Patients() {
  return (
    <Link href={"/patients"} className="flex justify-center p-1 text-white border-2">Patients</Link>
  );
}

export default Patients;
