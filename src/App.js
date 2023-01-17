import ReactPlayer from 'react-player';
import './App.css';
import ironhackLogo from "./assets/logo.png"
import Footer from './components/Footer';
import Header from "./components/Header"
import Movie from './components/Movie';
import User from './components/User';




function App() {

  const moviesArray = [
    {
      title: 'the godfather',
      rating: 9,
    },
    {
      title: 'Pulp Fiction',
      rating: 8,
    },
    {
      title: 'Coco',
      rating: 9,
    },
  ];

  const titleId = "my-title";

  const title = "Hungry ?";

  const user = {
    name: "bob",
    surname: "smith"
  }

  const capitalizeFirstLetter = (str) => {
    return str[0].toUpperCase() + str.slice(1);
  }


  const titleCSS = {
    color: "#3e3eff",
    marginBottom: "3rem",
    padding: "1rem 2rem",
    backgroundColor: "#bbffbb"
  }


  return (
    <>

      <Header>
        <h1>Main title</h1>
        <h2>Subtitle</h2>
      </Header>

      {/* jsx comment */} 

      <img id="logo" className="intro-img" src={ironhackLogo} alt="ironhack logo" />
      <br />
      <h1 style={titleCSS} id={titleId}>{title}</h1>
      <p>Hello {capitalizeFirstLetter(user.name)} {capitalizeFirstLetter(user.surname)}</p>


      <hr />

      <User name="Alice" surname="Smith" food="pizza" age={10 + 10 + 2} isLoggedIn />
      <User name="Bob" surname="Johnson" food="salad" age={30} />
      <User name="Charly" surname="Williams" food="tacos" age={40} />

      <hr />

      <Movie movieDetails={moviesArray[0]} />
      <Movie movieDetails={moviesArray[1]} />
      <Movie movieDetails={moviesArray[2]} />

      <hr />

      <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing={false} controls={true} />

      <Footer />
      

    </>
  );
}

export default App;
