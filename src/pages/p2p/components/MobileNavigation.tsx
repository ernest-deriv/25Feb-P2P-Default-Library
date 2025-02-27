import { Link, useLocation } from "react-router-dom";

export function MobileNavigation() {
  const location = useLocation();
  const path = location.pathname;

  const getNavItemClass = (itemPath: string) => {
    const isActive = path === itemPath;
    return `flex flex-col items-center gap-1 ${isActive ? "text-coral" : "text-[#85898E]"}`;
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 sm:hidden bg-white border-t py-3 z-[9998] shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex justify-around items-center px-6">
        <Link to="/p2p" className={getNavItemClass("/p2p")}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.66667 3.33333L12 6.66667M12 6.66667H9.33333M12 6.66667V4"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.33333 12.6667L4 9.33333M4 9.33333H6.66667M4 9.33333V12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-sm ${path === "/p2p" ? "font-medium" : "font-light"}`}
          >
            Buy/Sell
          </span>
        </Link>

        <Link to="/p2p/orders" className={getNavItemClass("/p2p/orders")}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 4H2.66667C2.29848 4 2 4.29848 2 4.66667V13.3333C2 13.7015 2.29848 14 2.66667 14H13.3333C13.7015 14 14 13.7015 14 13.3333V4.66667C14 4.29848 13.7015 4 13.3333 4Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.3333 2L8 4L4.66667 2"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-sm ${path === "/p2p/orders" ? "font-medium" : "font-light"}`}
          >
            Orders
          </span>
        </Link>

        <Link to="/p2p/my-ads" className={getNavItemClass("/p2p/my-ads")}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 2H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 6H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 10H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2 14H14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-sm ${path === "/p2p/my-ads" ? "font-medium" : "font-light"}`}
          >
            My ads
          </span>
        </Link>

        <Link to="/p2p/profile" className={getNavItemClass("/p2p/profile")}>
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.3333 14V12.6667C13.3333 11.9594 13.0524 11.2811 12.5523 10.781C12.0522 10.281 11.3739 10 10.6667 10H5.33333C4.62609 10 3.94781 10.281 3.44771 10.781C2.94762 11.2811 2.66667 11.9594 2.66667 12.6667V14"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8 7.33333C9.47276 7.33333 10.6667 6.13943 10.6667 4.66667C10.6667 3.19391 9.47276 2 8 2C6.52724 2 5.33334 3.19391 5.33334 4.66667C5.33334 6.13943 6.52724 7.33333 8 7.33333Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-sm ${path === "/p2p/profile" ? "font-medium" : "font-light"}`}
          >
            Profile
          </span>
        </Link>
      </div>
    </div>
  );
}
