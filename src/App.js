import './App.css';

function App() {
  return (
    <div className="App">
       <img src="back.jpg" className="round" alt="background"/>
        
        <div className="welcome">
          <h1>Plan your journey with Us.!</h1>
          <h2 id="miles">The journey of a thousand miles begin with one step</h2>
          <a href="https://www.google.com/" id="view">Find Taxi</a>
        </div>

        <div className="second">
          <h3 id="air">AIRPORT TAXI SERVICE</h3>
          <h4 id="fast">Fast, Freindly and most reliable tai service</h4><br></br><br></br>

          <div className="gallery">
           <img src="one.jpg" alt="first" id="one"/>
           <h3 id="f">find the closest taxi near to you.<br></br> We are here to look for you.</h3>

           <img src="two.jpg" alt="first" id="two"/>
           <h3 id="s">Easy to find the directions.<br></br> We are here to look for you.</h3>
           
           <img src="three.jpg" alt="first" id="three"/>
           <h3 id="t">Easy to find the directions.<br></br> We are here to look for you.</h3>
          </div>
        </div>
    </div>
  );
}

export default App;
