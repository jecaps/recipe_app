import "./styles.css";

export default function App() {
  return (
    <div>
      <div className="header-img bg-veggies bg-cover bg-center bg-no-repeat h-60 w-screen object-cover">
        <div className="header-overlay bg-transparent backdrop-blur-sm w-full h-full text-center p-4"></div>
      </div>

      <nav className="navbar flex justify-between items-center px-4 h-12 bg-yellow-100 shadow shadow-yellow-300">
        <div className="nav--logo flex">
          <img
            src={require("./images/kanzept-logo.png")}
            alt=""
            className="nav-logo w-25 h-25 self-center"
          ></img>
          <h2 className="nav-logo">Kanzepts</h2>
        </div>
        <div className="nav--items flex">
          <p className="nav-item">Recipes</p>
          <p className="nav-item">Ingredients</p>
        </div>
      </nav>

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
