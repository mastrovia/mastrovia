import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  // const currentPage = window.location.pathname?.split("/")?.filter((e) => e)?.[0];

  return (
    <nav className="z-20 w-[100%] fixed dark-glassy border border-[var(--bg)] border-b-[var(--border)]">
      <div className="container mx-auto max-w-6xl flex flex-row items-center justify-between">
        <h1 className="px-4 py-4 cursor-pointer select-none" onClick={() => navigate("/")}>
          Mastrovia
        </h1>

        <div className="transition-all p-4 border border-[#00000000] border-l-[var(--border)]">
          Home
        </div>
        {/* <p className="p-4">Let's connect</p> */}
        {/* <ul className="flex flex-row items-center cursor-pointer">
          <li className="transition-all p-4 border border-[#00000000] border-l-[var(--border)] hover:text-[var(--bg)] hover:bg-[var(--primary)]">
            Blog
          </li>
          <li className="transition-all p-4 border border-[#00000000] border-l-[var(--border)] hover:text-[var(--bg)] hover:bg-[var(--primary)]">
            Email
          </li>
          <li
            style={{
              ...(currentPage == "contact" ? { backgroundColor: "var(--primary)" } : {}),
              ...(currentPage == "contact" ? { color: "var(--bg)" } : {}),
            }}
            onClick={() => navigate("/contact")}
            className="transition-all p-4 border border-[#00000000] border-l-[var(--border)] hover:text-[var(--bg)] hover:bg-[var(--primary)]"
          >
            Contact
          </li>
        </ul> */}
      </div>
    </nav>
  );
}
