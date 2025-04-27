// import React, { useState } from "react";
// import { Nav } from "react-bootstrap";
// import { Routes, Route, Link } from "react-router-dom";
// import Home from "./Home";
// import About from "./About";
// import Announcements from "./Announcements";
// import Contributions from "./Contributions";
// import Events from "./Events";
// import ScrollToTop from "./scrollTop";
// import NotFound from "./NotFound";
// import {
//   HomeIcon,
//   InfoIcon,
//   MegaphoneIcon,
//   HandCoinsIcon,
//   CalendarIcon,
// } from "lucide-react";
// import Join from "./Join";
// import Gallery from "./Gallary";

// const Navbar = () => {
//   const [isNavOpen, setIsNavOpen] = useState(false);

//   const links = [
//     { path: "/", name: "Home", icon: <HomeIcon size={20} /> },
//     { path: "/about", name: "About", icon: <InfoIcon size={20} /> },
//     {
//       path: "/announcements",
//       name: "Announcements",
//       icon: <MegaphoneIcon size={20} />,
//     },
//     {
//       path: "/contributions",
//       name: "Contributions",
//       icon: <HandCoinsIcon size={20} />,
//     },
//     { path: "/events", name: "Events", icon: <CalendarIcon size={20} /> },
//   ];

//   return (
//     <div className="nav">
//       <ScrollToTop />

//       {/* Header */}
//       <header className="flex items-center justify-between fixed top-0 w-full z-[1000] px-4 py-2 bg-green-600 shadow-lg">
//         {/* Logo and Title */}
//         <div className="flex items-center space-x-3">
//           <img
//             src="/images/K-logo.jpg"
//             alt="logo"
//             className="h-12 md:h-14 rounded-full border-2 border-white"
//           />
//           <span className="font-bold text-2xl md:text-3xl font-serif text-white drop-shadow-sm">
//             Kiti
//           </span>
//         </div>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden text-3xl text-white focus:outline-none transition-transform transform hover:scale-110"
//           onClick={() => setIsNavOpen(true)}
//         >
//           ☰
//         </button>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center space-x-2">
//           {links.map((link, idx) => (
//             <Nav.Link
//               key={idx}
//               as={Link}
//               to={link.path}
//               className="flex items-center bg-white rounded-full px-4 py-2 text-black font-semibold shadow-sm hover:bg-blue-500 hover:text-blue transition-colors duration-300 border-2 border-blue-800"
//             >
//               <span>{link.name}</span>
//             </Nav.Link>
//           ))}
//         </nav>
//       </header>

//       {/* Sidebar */}
//       <div
//         className={`fixed top-0 left-0 w-[70%] max-w-xs h-full bg-white shadow-2xl z-[9999] transform ${
//           isNavOpen ? "translate-x-0" : "-translate-x-full"
//         } transition-transform duration-500 ease-in-out`}
//       >
//         {/* Sidebar Header */}
//         <div className="flex items-center justify-between px-4 py-4 bg-green-600">
//           <div className="flex items-center space-x-2">
//             <img
//               src="/images/K-logo.jpg"
//               alt="logo"
//               className="h-10 rounded-full"
//             />
//             <span className="font-bold text-xl text-white font-serif">
//               Kiti
//             </span>
//           </div>
//           <button
//             className="text-2xl text-black focus:outline-none  p-1 hover:bg-gray-200 transition-colors duration-300"
//             onClick={() => setIsNavOpen(false)}
//           >
//             ✖
//           </button>
//         </div>

//         {/* Sidebar Links */}
// <nav className="flex flex-col p-6 space-y-3">
//   {links.map((link, idx) => (
//     <Nav.Link
//       key={idx}
//       as={Link}
//       to={link.path}
//       className="flex items-center space-x-4 bg-white rounded-full px-4 py-2 text-black font-semibold shadow-md hover:bg-green-100 hover:scale-105 transition-all duration-300"
//       onClick={() => setIsNavOpen(false)}
//     >
//       <div className="flex items-center justify-center w-8 h-8">
//         {link.icon}
//       </div>
//       <span className="text-base">{link.name}</span>
//     </Nav.Link>
//   ))}
// </nav>

//         {/* Get Started Button */}
//         <div className="absolute bottom-8 w-full flex justify-center">
//           <Link
//             to="/contributions"
//             className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300"
//             onClick={() => setIsNavOpen(false)}
//           >
//             Get Started 🚀
//           </Link>
//         </div>
//       </div>

//       {/* Backdrop */}
//       {isNavOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
//           onClick={() => setIsNavOpen(false)}
//         ></div>
//       )}

//       {/* Main Content */}
//       <main className="pt-24">
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/announcements" element={<Announcements />} />
//           <Route path="/contributions" element={<Contributions />} />
//           <Route path="/events" element={<Events />} />
//           <Route path="/join" element={<Join />} />
//           <Route path="/gallary" element={<Gallery />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </main>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Announcements from "./Announcements";
import Contributions from "./Contributions";
import Events from "./Events";
import ScrollToTop from "./scrollTop";
import NotFound from "./NotFound";
import Join from "./Join";
import Gallery from "./Gallary";
import Profile from "./Profile"; // ✅ Import Profile page
import {
  HomeIcon,
  InfoIcon,
  MegaphoneIcon,
  HandCoinsIcon,
  CalendarIcon,
  UserIcon, // ✅ Import User Icon
} from "lucide-react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const links = [
    { path: "/", name: "Home", icon: <HomeIcon size={20} /> },
    { path: "/about", name: "About", icon: <InfoIcon size={20} /> },
    {
      path: "/announcements",
      name: "Announcements",
      icon: <MegaphoneIcon size={20} />,
    },
    {
      path: "/contributions",
      name: "Contributions",
      icon: <HandCoinsIcon size={20} />,
    },
    { path: "/events", name: "Events", icon: <CalendarIcon size={20} /> },
    { path: "/profile", name: "Profile", icon: <UserIcon size={20} /> }, // ✅ Added Profile
  ];

  return (
    <div className="nav">
      <ScrollToTop />

      {/* Header */}
      <header className="flex items-center justify-between fixed top-0 w-full z-[1000] px-4 py-2 bg-green-600 shadow-lg">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/images/K-logo.jpg"
            alt="logo"
            className="h-12 md:h-14 rounded-full border-2 border-white"
          />
          <span className="font-bold text-2xl md:text-3xl font-serif text-white drop-shadow-sm">
            Kiti
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none transition-transform transform hover:scale-110"
          onClick={() => setIsNavOpen(true)}
        >
          ☰
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          {links.map((link, idx) => (
            <Nav.Link
              key={idx}
              as={Link}
              to={link.path}
              className="flex items-center bg-white rounded-full px-4 py-2 text-black font-semibold shadow-sm hover:bg-blue-500 hover:text-blue transition-colors duration-300 border-2 border-blue-800"
            >
              <span>{link.name}</span>
            </Nav.Link>
          ))}
          {/* <Nav.Link as={Link} to="/profile" className="text-white">
            <span>
              <UserIcon size={20} />
            </span>
          </Nav.Link> */}
        </nav>
      </header>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-[70%] max-w-xs h-full bg-white shadow-2xl z-[9999] transform ${
          isNavOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-500 ease-in-out`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between px-4 py-4 bg-green-600">
          <div className="flex items-center space-x-2">
            <img
              src="/images/K-logo.jpg"
              alt="logo"
              className="h-10 rounded-full"
            />
            <span className="font-bold text-xl text-white font-serif">
              Kiti
            </span>
          </div>
          <button
            className="text-2xl text-black focus:outline-none p-1 hover:bg-gray-200 transition-colors duration-300"
            onClick={() => setIsNavOpen(false)}
          >
            ✖
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col p-6 space-y-3">
          {links.map((link, idx) => (
            <Nav.Link
              key={idx}
              as={Link}
              to={link.path}
              className="flex items-center space-x-4 bg-white rounded-full px-4 py-2 text-black font-semibold shadow-md hover:bg-green-100 hover:scale-105 transition-all duration-300"
              onClick={() => setIsNavOpen(false)}
            >
              <div className="flex items-center justify-center w-8 h-8">
                {link.icon}
              </div>
              <span className="text-base">{link.name}</span>
            </Nav.Link>
          ))}
        </nav>

        {/* Get Started Button */}
        <div className="absolute  w-full flex justify-center">
          <Link
            to="/contributions"
            className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-green-700 transition-all duration-300 "
            onClick={() => setIsNavOpen(false)}
          >
            Get Started 🚀
          </Link>
        </div>
      </div>

      {/* Backdrop */}
      {isNavOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9998]"
          onClick={() => setIsNavOpen(false)}
        ></div>
      )}

      {/* Main Content */}
      <main className="pt-24">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/announcements" element={<Announcements />} />
          <Route path="/contributions" element={<Contributions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/join" element={<Join />} />
          <Route path="/gallary" element={<Gallery />} />
          <Route path="/profile" element={<Profile />} />{" "}
          {/* ✅ Profile route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default Navbar;
