import Post from './Contents/Post';
import './App.css';
import Post2 from './Contents/Post2';
import Post3 from './Contents/Post3';


function App() {


  return (
    <div className="App">
      <div class="m-5" >
        
        <h3 class="title" >Hello World!</h3>
        <div id="articles"></div>
    </div>

    <Post/>
    <Post2/>
    <Post3/>
   

    <div class="bot_w">Credits: photos from Unsplash.com, icons from Icons8, graphics from craftwork.design.</div>
    <div class="bot_w_l">Made with ✨❤️ at nFactorial in 2022.</div>
    </div>
  );
}

export default App;
