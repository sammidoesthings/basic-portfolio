import './App.css';

function App() {
  return (
    <div className="app-container">
      <div className="app-header">

        <div className="navigation">
          <a href="https://www.twitter.com/sammidoesthings"><button>twitter</button></a>
          <a href="https://www.instagram.com/sammidoesthings"><button>instagram</button></a>
          <a href="https://www.linkedin.com/in/samanthalittle8436"><button>linkedin</button></a>
          <a href="https://www.github.com/sammidoesthings"><button>github</button></a>
          <a href="https://www.youtube.com/channel/UCDPfahiBCMQQLYsccSXhc-A"><button>youtube</button></a>
        </div>

        <div className="site-title">
          <h2>sammi does things</h2>
        </div>

        {/* <div className="home-button-div">
          <a href="/home"><button className="home-button">sammi home</button></a>
        </div> */}

        {/* HEADER ENDS HERE */}
      </div>

      <div className="intro-card">

        <div className="intro-about">
          <div className="intro-about-text">
            <h3>Hello, there!</h3>
            <p>I'm Sammi -- a full stack web developer based out of coffee shops near the beautiful beaches of San Francisco!</p> 
            <p>I have a passion for designing sites that are functional <span classname="italics">and</span> pretty.</p>
            <p>~~~ * ~~~</p>
            <p>I work primarily in React, Next, and Node, but I've recently started learning Python.</p> 
            <p>You can read about my journey on Medium or scroll down to see my projects!</p>
          </div>
        </div>

        <div className="intro-photo">
          <img src="../assets/profile-photo.jpg" alt="#"/>
        </div>
      </div>

      <div className="projects-container">
        <div class="site-project">
          <img src="assets/project1.jpeg" alt="#"/>
          <h2>Project Name</h2>
        </div>
        <div class="site-project">
          <img src="assets/project1.jpeg" alt="#"/>
          <h2>Project Name</h2>
        </div>
      </div>
      {/* APP CONTAINER ENDS HERE */}
    </div>
  );
}

export default App;
