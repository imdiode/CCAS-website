

function App() {
  return (
    <nav class="navbar bg-dark navbar-expand-lg navbar-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link link-active" href="#title">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about-me">About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#connect">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default App;
