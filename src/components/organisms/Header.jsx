export const Header = () => {
  return (
    <header className="navbar sticky top-0 z-50 backdrop-blur-md bg-black/50 shadow-sm max-w-[1400px] mx-auto">
      <nav className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><a>Anime</a></li>
            <li>
              <a>News</a>
              <ul className="p-2">
                <li><a>Top Manga</a></li>
                <li><a>Manga Search</a></li>
                <li><a>Adapted To Anime</a></li>
              </ul>
            </li>
            <li><a>Manga</a></li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Neko</a>
      </nav>
      <nav className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Anime</a></li>
          <li>
            <details>
              <summary>News</summary>
              <ul className="p-2 min-w-[200px]">
                <li><a>Top Manga</a></li>
                <li><a>Manga Search</a></li>
                <li><a>Adapted To Anime</a></li>
              </ul>
            </details>
          </li>
          <li><a>Manga</a></li>
        </ul>
      </nav>
      <div className="navbar-end gap-2">
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 h-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://imgs.search.brave.com/ha8f4njBvoKcuSkUhUrV7wQtDOAkOak9X4v1bmvN584/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/cmFmbGVkLmNvbS9h/bmltZS1pY29ucy9p/bWFnZXMvRG5sNmdy/YzJqdjFlaEJBU3d4/YzZJdkNlaENGZEpz/M1guanBn" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li><a>Settings</a></li>
            <li><a>Logout</a></li>
          </ul>
        </div>
      </div>
    </header>
  )
}
