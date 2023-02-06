import './post.css';
import img from "../img/Img1.jpg";
function Post(){

    return(
        <div>
        <div className='d-flex'>
            <p className="author" >Authors name </p>
            <p className="in"> in </p>
            <p className="topic"> Topic Name </p>
            <p className="july"> · 7 July</p>
        </div>

        <h3 className='bigTitle' style={{color:"black"}}>7 practical CSS tips</h3>

        <a href="article.html" class="link"> <p class="h4 text-dark mb-5" id="title"></p></a>

        <p id="summary1">
        You not only learn more Python by implementing what you already know but, in the end,
        </p>
        <p id="summary2">
        you can see how all your hard work pays off.</p>

        <div className="d-flex ">
            <button className="but">Java Script</button>
            <p className="mt-5 mb-5 p-2 me-3"> 12 min read </p>
            <p className="mt-5 mb-5 p-2">· Selected for you </p>

            <div className="d-flex cubes">
                <div className="cube1">cube</div>
                <div className="cube1">cube</div>
                <div className="cube1">cube</div>
            </div>
           <img className="w-25 h-30 image" src={img} alt="img_source"/>
        </div>

        
        <div class="m-5 line">line</div>
        </div>
    );

}

export default Post;