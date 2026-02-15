import { Link } from "react-router-dom";

export default function Sidebar_dashboard() {
  return (
    <div>
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-6 flex flex-col justify-between min-h-screen">
        {/* Top Section */}
        <div>
          <h1 className="text-2xl font-bold mb-8 tracking-wide">Dashboard</h1>

          <div className="flex flex-col gap-3 text-gray-700 font-medium pt-2">
            <Link
              to="/dashboard"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.2803 9.03033C15.5732 8.73744 15.5732 8.26256 15.2803 7.96967C14.9874 7.67678 14.5126 7.67678 14.2197 7.96967L10 12.1893L8.03033 10.2197C7.73744 9.92678 7.26256 9.92678 6.96967 10.2197C6.67678 10.5126 6.67678 10.9874 6.96967 11.2803L9.46967 13.7803C9.76256 14.0732 10.2374 14.0732 10.5303 13.7803L15.2803 9.03033ZM3 6.25C3 4.45507 4.45507 3 6.25 3H15.75C17.5449 3 19 4.45507 19 6.25V15.75C19 17.5449 17.5449 19 15.75 19H6.25C4.45507 19 3 17.5449 3 15.75V6.25ZM6.25 4.5C5.2835 4.5 4.5 5.2835 4.5 6.25V15.75C4.5 16.7165 5.2835 17.5 6.25 17.5H15.75C16.7165 17.5 17.5 16.7165 17.5 15.75V6.25C17.5 5.2835 16.7165 4.5 15.75 4.5H6.25ZM9.24118 21.5C8.08967 21.5 7.07793 20.9016 6.5 19.9987H9.21565L9.24118 19.9989H16.2462C18.3188 19.9989 19.9989 18.3188 19.9989 16.2462V6.5C20.9016 7.07796 21.5 8.08964 21.5 9.24108V16.2462C21.5 19.1478 19.1478 21.5 16.2462 21.5H9.24118Z"
                  fill="#000000"
                />
              </svg>
              Overview
            </Link>

            <Link
              to="/employees"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="#000000"
              >
                <path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z" />
              </svg>
              All Employees
            </Link>

            <Link
              to="/add-employee"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
                <g fill="none">
                  <path d="M24 0v24H0V0zM12.593 23.258l-.011.002-.071.035-.02.004-.014-.004-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01-.017.428.005.02.01.013.104.074.015.004.012-.004.104-.074.012-.016.004-.017-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113-.013.002-.185.093-.01.01-.003.011.018.43.005.012.008.007.201.093c.012.004.023 0 .029-.008l.004-.014-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014-.034.614c0 .012.007.02.017.024l.015-.002.201-.093.01-.008.004-.011.017-.43-.003-.012-.01-.01z" />
                  <path
                    fill="#000000"
                    d="M10.5 20a1.5 1.5 0 0 0 3 0v-6.5H20a1.5 1.5 0 0 0 0-3h-6.5V4a1.5 1.5 0 0 0-3 0v6.5H4a1.5 1.5 0 0 0 0 3h6.5z"
                  />
                </g>
              </svg>
              Add Employee
            </Link>

            <Link
              to="/applicants"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 4C4 2.89543 4.89543 2 6 2H12.1722C12.7027 2 13.2114 2.21071 13.5864 2.58579L19.4142 8.41355C19.7893 8.78863 20 9.29733 20 9.82777V20C20 21.1046 19.1046 22 18 22H13.9822C13.9303 21.6387 13.7654 21.2905 13.4874 21.0126L12.9749 20.5H18C18.2761 20.5 18.5 20.2761 18.5 20V10H14C12.8954 10 12 9.10457 12 8V3.5H6C5.72386 3.5 5.5 3.72386 5.5 4V11.0907C4.96945 11.1881 4.46553 11.3617 4 11.5997V4ZM14 8.5H17.3793L13.5 4.62066V8C13.5 8.27614 13.7239 8.5 14 8.5ZM6.5 21C7.47187 21 8.37179 20.6919 9.1074 20.1681L11.7197 22.7803C12.0126 23.0732 12.4874 23.0732 12.7803 22.7803C13.0732 22.4874 13.0732 22.0126 12.7803 21.7197L10.1681 19.1074C10.6919 18.3718 11 17.4719 11 16.5C11 14.0147 8.98528 12 6.5 12C4.01472 12 2 14.0147 2 16.5C2 18.9853 4.01472 21 6.5 21ZM6.5 19.5C4.84315 19.5 3.5 18.1569 3.5 16.5C3.5 14.8431 4.84315 13.5 6.5 13.5C8.15685 13.5 9.5 14.8431 9.5 16.5C9.5 18.1569 8.15685 19.5 6.5 19.5Z"
                  fill="#000000"
                />
              </svg>
              Job Applicants
            </Link>

            <Link
              to="/projects"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M13 5h8" />
                <path d="M13 12h8" />
                <path d="M13 19h8" />
                <path d="m3 17 2 2 4-4" />
                <rect x="3" y="4" width="6" height="6" rx="1" />
              </svg>
              Projects
            </Link>

            <Link
              to="/attendance"
              className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
            >
              <svg
                height="24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 256"
                fill="#000000"
              >
                <path d="M221.35,104.11a8,8,0,0,0-6.57,9.21A88.85,88.85,0,0,1,216,128a87.62,87.62,0,0,1-22.24,58.41,79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.92,103.92,0,1,0,85.24,85.24A8,8,0,0,0,221.35,104.11ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM237.66,45.66l-32,32a8,8,0,0,1-11.32,0l-16-16a8,8,0,0,1,11.32-11.32L200,60.69l26.34-26.35a8,8,0,0,1,11.32,11.32Z" />
              </svg>
              Attendance Overview
            </Link>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-2 pt-6">
          <Link
            to="/profile"
            className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
          >
            <svg
              stroke="#000000"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.99988 18C3.99988 15.7908 5.79074 14 7.99988 14H15.9999C18.209 14 19.9999 15.7908 19.9999 18V18C19.9999 19.1045 19.1044 20 17.9999 20H5.99988C4.89531 20 3.99988 19.1045 3.99988 18V18Z"
                stroke="#000000"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <circle
                cx="11.9999"
                cy="6.99997"
                r="3"
                stroke="#000000"
                stroke-width="1.5"
              />
            </svg>
            Profile
          </Link>

          <button className="flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200 hover:bg-red-50 hover:text-red-500 hover:scale-105 text-left">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M10.5303 5.46967C10.8232 5.76256 10.8232 6.23744 10.5303 6.53033L5.81066 11.25H20C20.4142 11.25 20.75 11.5858 20.75 12C20.75 12.4142 20.4142 12.75 20 12.75H5.81066L10.5303 17.4697C10.8232 17.7626 10.8232 18.2374 10.5303 18.5303C10.2374 18.8232 9.76256 18.8232 9.46967 18.5303L3.46967 12.5303C3.17678 12.2374 3.17678 11.7626 3.46967 11.4697L9.46967 5.46967C9.76256 5.17678 10.2374 5.17678 10.5303 5.46967Z"
                fill="#000000"
              />
            </svg>
            Logout
          </button>
        </div>
      </aside>
    </div>
  );
}
