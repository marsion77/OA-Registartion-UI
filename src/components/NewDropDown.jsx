import { useState, useRef, useEffect } from "react";

const courses = [
  "Python",
  "Java",
  "JavaScript",
  "Dart",
  "React",
  "Flutter",
  "SQL",
  "Front-End",
  "Power BI",
  "MERN Full Stack",
  "MEAN Full Stack",
  "Java Full Stack",
  "Python Django",
  "AI with Data Science",
  "Data Analytics",
  "Others",
];

const NewDropdown = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative z-30" ref={ref}>
      {/* Select field */}
      <div
        className="input-dark cursor-pointer flex justify-between items-center"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className={selected ? "text-white" : "text-gray-400"}>
          {selected || "Select Course"}
        </span>
        <span className="text-gray-400">▾</span>
      </div>

      {/* Dropdown */}
      {open && (
        <ul className="absolute top-full left-0 mt-2 w-full bg-[#1b1b22] border border-[#2a2a35] rounded-xl shadow-xl max-h-52 overflow-y-auto z-50">
          {courses.map((course) => (
            <li
              key={course}
              onClick={() => {
                setSelected(course);
                setOpen(false);
              }}
              className="px-4 py-2 text-sm text-gray-200 hover:bg-[#2a2a35] cursor-pointer transition"
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewDropdown;
