// templates components
import { Link } from "@remix-run/react";
import { Label } from "~/components/ui/label";
import { Badge } from "~/components/ui/badge";
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarInput,
} from "~/components/ui/sidebar";
import { Search, Settings, Edit, ChevronDown, Plus } from "lucide-react";

export default function Component() {
  const data = [
    {
      id: 1,
      name: "COVID-19 Waiver",
      usage: 10,
      submissions: 0,
    },
    {
      id: 2,
      name: "Driving Waiver",
      usage: 10,
      submissions: 0,
    },
    {
      id: 111,
      name: "Diving Waiver",
      usage: 5,
      submissions: 99,
    },
    {
      id: 220,
      name: "Visitor Waiver",
      usage: 10,
      submissions: 10,
    },
    {
      id: 222,
      name: "Climing Waiver",
      usage: 5,
      submissions: 5,
    },
  ];

  return (
    <div className="w-full">
      <div className="pt-0 p-6">
        <div className="flex items-center gap-32">
          <div className="w-72 h-10">
            <SidebarGroup className="py-0">
              <SidebarGroupContent className="relative">
                <Label htmlFor="search" className="sr-only">
                  Search
                </Label>
                <SidebarInput
                  id="search"
                  placeholder="Keyword search"
                  className="pl-8 h-10 outline-[0] w-full rounded-3xl"
                />
                <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
              </SidebarGroupContent>
            </SidebarGroup>
          </div>
          <Link
            to="/template"
            className="flex items-center h-10 px-4 font-light p-[1.2rem] bg-emerald-500 text-white rounded-3xl hover:bg-emerald-600"
          >
            <Plus className="size-4 mr-2" />
            Create new template
          </Link>
        </div>
        <div className="mt-6 overflow-x-auto">
          <table className="min-w-full border-fixed bg-white">
            <thead>
              <tr className="border-b-[1px] border-slate-300 text-[.9rem]">
                <th className="pl-[0] leading-[1.25rem] py-[1rem] px-[0.75rem] text-left font-medium">
                  Template name
                </th>
                <th className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left  font-medium">
                  Today's usage
                </th>
                <th className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left  font-medium">
                  Submissions
                </th>
                <th className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left  font-medium">
                  Status
                </th>
                <th className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left  font-medium"></th>
                <th className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left  font-medium"></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  className="border-b-[1px] border-slate-200 text-[.9rem]"
                  key={row.id}
                >
                  <td className="pl-[0] leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    {row.name}
                  </td>
                  <td className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    {row.usage}
                  </td>
                  <td className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    {row.submissions}
                  </td>
                  <td className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    {row.submissions > 0 ? (
                      <Badge className="bg-green-100 text-green-800 cursor-pointer mr-1 shadow-none">
                        Active
                        <ChevronDown className="w-4 h-4 relative top-[1px]" />
                      </Badge>
                    ) : (
                      <Badge className="bg-red-100 text-red-800 cursor-pointer mr-1 shadow-none">
                        Inactive
                        <ChevronDown className="w-4 h-4 relative top-[1px]" />
                      </Badge>
                    )}
                  </td>
                  <td className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    <Link
                      to="/templates/create"
                      className="flex items-center text-emerald-600 text-[.9rem] hover:underline"
                    >
                      <Settings className="size-4 mr-1" /> Settings
                    </Link>
                  </td>
                  <td className="leading-[1.25rem] py-[1rem] px-[0.75rem] text-left">
                    <Link
                      to="/templates/create"
                      className="flex items-center text-emerald-600 text-[.9rem] hover:underline"
                    >
                      <Edit className="size-4 mr-1" /> Edit Template
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
