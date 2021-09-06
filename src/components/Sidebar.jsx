const Sidebar = () => {
  return (
    <div className="d-none d-lg-flex sidebar-container" id="main-content">
      <div className="sidebar">
        <ul className="nav flex-column navbar-dark d-flex h-60">
          <li className="nav-item mb-2 text-white">
            <img
              className="pl-2 pt-3"
              src="..\..\data\spotifiy.png"
              height="40px"
              width="auto"
              alt=""
              srcset=""
            />
          </li>
          <li className="nav-item text-white pl-2 activehome">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5z" />
              </svg>{" "}
              <a href="#Details">Home</a>
            </p>
          </li>
          <li className="nav-item text-white">
            <p>
              <a href="#Details">
                <input
                  id="input"
                  type="search"
                  className="form-control"
                  placeholder="Search"
                  onchange="searchAlbums(this.value)"
                />
                <svg
                  id="search-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="currentColor"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </a>
            </p>
          </li>
          <li className="nav-item text-white ml-2 mb-4">
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-distribute-horizontal"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5zm-13 0a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 1 0v-13a.5.5 0 0 0-.5-.5z"
                />
                <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10z" />
              </svg>{" "}
              <a href="#Details">Your Library</a>{" "}
            </p>
          </li>
          <li className="nav-item text-white ml-2">
            <p>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-plus-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z" />
              </svg>
              <a href="#Details"> Create Playlist</a>
            </p>
          </li>
          <li className="nav-item text-white ml-2 mb-0">
            <p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                className="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                />
              </svg>
              <a href="#Details"> Liked Songs</a>
            </p>
          </li>
        </ul>
        {/* <hr style={"color: rgb(102, 102, 102)"} /> */}
        <div className="pl-2 pb-5 mb-5 scrollbar-list">
          <a className="click-me" href="#Album">
            <p>Funky Heavy Bluesy</p>
          </a>
          <a className="click-me " href="#Album">
            <p>Your Top Songs 2020</p>
          </a>

          <a className="click-me " href="#Album">
            <p>In Love With You-</p>
          </a>

          <a className="click-me" href="#Album">
            <p>This Is Rod Stewart</p>
          </a>

          <a className="click-me" href="#Album">
            <p>FRANCHISE ft.Young Thug...</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Your Top Songs 2019</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Palleggio</p>
          </a>
          <a className="click-me" href="#Album">
            <p>This is Joe Bonamassa</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Jun19</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Jack 30th Party 2</p>
          </a>

          <a className="click-me" href="#Album">
            <p>Jack 30th Party</p>
          </a>
          <a className="click-me" href="#Album">
            <p>This is Opeth</p>
          </a>
          <a className="click-me" href="#Album">
            <p>Matal Ballads</p>
          </a>
          <a className="click-me" href="#Album">
            <p>New Playlist</p>
          </a>

          <a className="click-me" href="#Album">
            <p>You Top Songs 2018</p>
          </a>

          <a className="click-me" href="#Album">
            <p>What People Say I Am, That Is What I Am Not</p>
          </a>

          <p className="text-white ml-3 fixedLink">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-circle-fill"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
            <a className="text-white" href="#Details">
              Install App
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

//Get rid of ps
//Have each link go to a different album page

export default Sidebar;
