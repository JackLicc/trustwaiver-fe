import React, { useState } from "react";
import FormBuilder from "~/components/FormBuilder";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

export default function Component() {
  return (
    <div>
      <div className="h-8 w-full bg-slate-400"></div>
      <Outlet />
    </div>
  );
}
