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

const CourseDropdown = () => {
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
    <div className="relative " ref={ref}>
      {/* <label className="label">
        Select Course <span className="text-red-500">*</span>
      </label> */}

      {/* Select field */}
      <div
        className="input bg-white cursor-pointer flex justify-between items-center"
        onClick={() => setOpen(!open)}
      >
        <span className={selected ? "text-black" : "text-gray-400"}>
          {selected || "Select Course"}
        </span>
        <span className="text-gray-500">▾</span>
      </div>

      {/* Dropdown */}
      {open && (
      <ul className="fixed z-50 mt-1 w-[inherit] bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">

          {courses.map((course) => (
            <li
              key={course}
              onClick={() => {
                setSelected(course);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              {course}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CourseDropdown;
