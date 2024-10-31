import { Link } from "react-router-dom";
export const Header = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <Link to={"/"}>
        <div className="flex flex-col justify-center cursor-pointer text-xl font-bold ">
          Medium
        </div>
      </Link>
      <Link to={"/addblog"}>
        <button
          type="button"
          class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          Add Blog
        </button>
      </Link>
    </div>
  );
};


