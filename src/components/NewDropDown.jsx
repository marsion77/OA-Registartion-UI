// NewDropDown.jsx - FULLY FIXED & PERFECTLY RESPONSIVE
import { useState, useRef, useEffect } from "react";
import { FaBook, FaChevronDown } from "react-icons/fa";

const courses = [
  "Python", "Java", "JavaScript", "Dart", "React", "Flutter", "SQL",
  "Front-End", "Power BI", "MERN Full Stack", "MEAN Full Stack",
  "Java Full Stack", "Python Django", "AI with Data Science",
  "Data Analytics", "Others"
];

const NewDropDown = ({ value, onChange, name }) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(value || "");
  const ref = useRef(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (course) => {
    setSelected(course);
    setOpen(false);
    onChange({ target: { name, value: course } });
  };

  // Calculate perfect adaptive height
  const getDropdownHeight = () => {
    const spaceBelow = window.innerHeight - (ref.current?.getBoundingClientRect().bottom || 0);
    const maxVisibleItems = Math.floor(spaceBelow / 44);
    return Math.min(maxVisibleItems * 44, courses.length * 44, 400);
  };

  return (
    <div className="relative" ref={ref}>
      <div className="relative h-9">
        <FaBook className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none" size={16} />
        
        <div
          className="w-full h-full pl-11 pr-4 text-sm border border-gray-300 rounded-lg flex items-center justify-between cursor-pointer focus:ring-1 focus:ring-blue-400 focus:outline-none hover:border-gray-400 transition-all duration-200"
          onClick={() => setOpen(!open)}
        >
          <span className={selected ? "text-black font-medium" : "text-gray-400"}>
            {selected || "Select Course"}
          </span>
          <FaChevronDown 
            className={`text-gray-400 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} 
            size={14}
          />
        </div>

        {/* PERFECTLY VISIBLE DROPDOWN - FULLY FIXED */}
        {open && (
          <div 
            ref={dropdownRef}
            className="absolute left-0 w-full bg-white border border-gray-200 rounded-xl shadow-2xl z-[9999] overflow-hidden custom-scrollbar"
            style={{ 
              top: '100%',
              maxHeight: `${getDropdownHeight()}px`,
              overflowY: 'auto'
            }}
          >
            <style jsx>{`
              .custom-scrollbar::-webkit-scrollbar {
                width: 4px;
              }
              .custom-scrollbar::-webkit-scrollbar-track {
                background: transparent;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb {
                background: #cbd5e1;
                border-radius: 2px;
              }
              .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                background: #94a3b8;
              }
            `}</style>
            
            <div className="py-1">
              {courses.map((course, index) => (
                <div
                  key={index}
                  onClick={() => handleSelect(course)}
                  className="px-4 text-sm hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 cursor-pointer transition-all duration-200 border-l-4 border-transparent hover:border-blue-400 hover:text-blue-800 font-medium flex items-center min-h-[44px] leading-[44px] mx-1 hover:mx-1 first:hover:rounded-l-lg"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewDropDown;
