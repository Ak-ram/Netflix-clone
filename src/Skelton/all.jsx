// Packages
import { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Components
import Navbar from "./layout/L-Navbar";
import Btn from "./components/C-Btn";
import SelectBox from "./components/C-SelectBox";
import Story from "./layout/L-Story";
import Questions from "./layout/L-Question";
import Membership from "./layout/L-Membership";
import Footer from "./layout/L-Footer";
import Rights from "./layout/L-Rights";
import Devices from "./layout/L-Devices";
import ScrollTop from "../Skelton/components/C-ScrollTop";

// Icon Components
import {FaQuoteLeft,FaRegHandshake,FaBalanceScaleRight,} from "react-icons/fa";
import { BsLock, BsListCheck, BsArrowLeftShort } from "react-icons/bs";
import {
  IoSpeedometerOutline,
  IoInformationCircleOutline,
  IoBusinessOutline,
  IoHelp,
  IoChevronForwardOutline,
  IoCloseOutline,
} from "react-icons/io5";
import { RiContactsLine, RiComputerLine, RiNetflixLine } from "react-icons/ri";
import { VscAccount } from "react-icons/vsc";
import { SiVlcmediaplayer } from "react-icons/si";
import { BiCookie } from "react-icons/bi";

// Layouts
import History from "../Skelton/layout/L-History";
import PROGRESS_X from "../Skelton/layout/L-Progress_X";

// Pages
import LegalNotices from "../Skelton/pages/P-Legal Notices";
import WaysToWatch from "../Skelton/pages/P-Ways to Watch.jsx";
import FAQ from "../Skelton/pages/P-FAQ.jsx";
import Home from "../Skelton/pages/P-Home.jsx";


// Export All
export {
  ReactDOM,
  Router, Switch, Route,
  LegalNotices,
  WaysToWatch,
  Home,
  PROGRESS_X,
  ScrollTop,
  FAQ,
  History,
  Component,
  Fragment,
  NavLink,
  FaQuoteLeft,
  FaRegHandshake,
  FaBalanceScaleRight,
  IoSpeedometerOutline,
  IoInformationCircleOutline,
  IoBusinessOutline,
  IoChevronForwardOutline,
  IoCloseOutline,
  IoHelp,
  BsArrowLeftShort,
  Rights,
  RiContactsLine,
  RiComputerLine,
  RiNetflixLine,
  VscAccount,
  SiVlcmediaplayer,
  BiCookie,
  Devices,
  BsLock,
  BsListCheck,
  Navbar,
  Btn,
  SelectBox,
  Story,
  Questions,
  Membership,
  Footer,
};
