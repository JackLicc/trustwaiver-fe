import React, { useState } from "react";
import FormBuilder from "~/components/FormBuilder";
import { Button } from "~/components/ui/button";
import { FilePenLine } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "~/components/ui/breadcrumb";
import { Link } from "@remix-run/react";

export default function Component() {
  return (
    <div className="px-4 md:px-6 lg:px-8">
      <Breadcrumb className="my-2">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link to="/templates">Waiver templates</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Create template</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className="h-14 pt-2 pb-2 w-full text-slate-800 px-4 flex justify-between border-b-[1px] border-slate-300">
        <div className="flex items-center">
          <span className="mr-1 font-light">Template name</span>
          <FilePenLine className="h-6 w-6 ml-2 cursor-pointer text-slate-800 hover:text-slate-600" />
        </div>
        <ul className="flex items-center gap-8">
          <li key="discard">
            <Button variant="destructive">Discard</Button>
          </li>
          <li key="preview">
            <Button variant="outline">Preview</Button>
          </li>
          <li key="save-publish">
            <Button>Save & publish</Button>
          </li>
        </ul>
      </div>
      <FormBuilder />
    </div>
  );
}
