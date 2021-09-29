import { lazy } from "react";
import NotesIcon from "@material-ui/icons/Notes";
import AddIcon from "@material-ui/icons/Add";
import SearchIcon from "@material-ui/icons/Search";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
const AddNotes = lazy(() => import("../addNotes/AddNotes"));
const AllNotes = lazy(() => import("../allNotes/AllNotes"));
const SearchNotes = lazy(() => import("../search/SearchNotes"));
const DifferentCategories = lazy(() =>
  import("../differentcategories/DifferentCategories")
);
const Edit = lazy(() => import("../edit/Edit"));

export default [
  {
    title: "Add Notes",
    path: "/",
    showInMenu: true,
    role: "all",
    icon: <AddIcon />,
    component: <AddNotes />,
  },
  {
    title: "All Notes",
    path: "/allnotes",
    showInMenu: true,
    role: "all",
    icon: <NotesIcon />,
    component: <AllNotes />,
  },
  {
    title: "Search Notes",
    path: "/searchNotes",
    showInMenu: true,
    role: "all",
    icon: <SearchIcon />,
    component: <SearchNotes />,
  },
  {
    title: "Different Categories",
    path: "/categories",
    showInMenu: true,
    role: "all",
    icon: <CalendarViewDayIcon />,
    component: <DifferentCategories />,
  },
  {
    title: "Edit",
    path: "/edit/:name",
    showInMenu: false,
    role: "all",
    icon: <CalendarViewDayIcon />,
    component: <Edit />,
  },
];
