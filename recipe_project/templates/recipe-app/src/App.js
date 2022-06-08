import "./styles.css";

export default function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler border-0 p-1"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand pl-8" href="#">
            Kanzepts
            <img
              src={require("./images/kanzept-logo.png")}
              alt=""
              className="nav-logo mx-1"
            ></img>
          </a>
          <div
            className="collapse navbar-collapse text-center"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Recipes
                </a>
                <ul
                  className="dropdown-menu p-2 text-center"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="#">
                      Lunch
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Dinner
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Snacks
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Ingredients
                </a>
              </li>
            </ul>
            <form className="d-flex m-auto w-50" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-secondary" type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* <nav className="nav navbar flex">
        <div className="nav--logo flex">
          <img
            src={require("./images/kanzept-logo.png")}
            alt=""
            className="nav-logo"
          ></img>
          <h2 className="nav-logo">Kanzepts</h2>
        </div>
        <div className="nav--items flex">
          <p className="nav-item">Recipes</p>
          <p className="nav-item">Ingredients</p>
        </div>
      </nav> */}

      {/* <nav class="navbar navbar-expand-md bg-dark navbar-light  rounded-bottom fixed-top">
        <div class="container">
          <a href="#" class="navbar-brand h1 mb-0">
            <img src="/recipe_project/templates/logo2.png" alt="" width="180" height="auto" />
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav ms-auto text-center">
              <li class="nav-item p-3">
                <a href="#learn" class="nav-link">
                  Hauptspeise
                </a>
              </li>
              <li class="nav-item p-3">
                <a href="#questions" class="nav-link">
                  Nachtisch
                </a>
              </li>
              <li class="nav-item p-3">
                <a href="#instructors" class="nav-link">
                  Snacks
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

      {/* <footer class="p-3 bg-gray text-center rounded-top fixed-bottom">
        <div class="containter">
          <p>Copyright &copy; A&J Kanz 2021</p>
          <a href="">
            <i class="bi bi-arrow-up-circle h1"></i>
          </a>
        </div>
      </footer> */}
    </div>
  );
}
