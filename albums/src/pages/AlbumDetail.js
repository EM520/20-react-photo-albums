import {useState,useEffect} from "react"
import { Album } from './Album.js';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import ModalImage from "react-modal-image"
import { Lightbox } from "react-modal-image";

export default function AlbumDetail(props) {
    //console.log(props)
    const idNum = props.match.params.id 
    //console.log(idNum)
    const [activeAlbums,setActiveAlbums] = useState({})
   
    useEffect(()=>{
         
        fetch(`http://localhost:3001/albums/${idNum}`)
        .then((resp)=>resp.json())
        .then((data)=>{     
            //console.log("data",data)
        setActiveAlbums(data)
        })
    },[])
  
    // console.log(activeAlbums)
     //console.log(activeAlbums.photos)
   
    const photoList=activeAlbums.photos

   
       
    return <div >
        <h2> {activeAlbums.name} </h2>
        <div className="albumDetail">
        <div className="albumBackList">
           <li> <Link to={`/`} >Home</Link></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/1"}}> Album 1</a></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/2"}}> Album 2</a></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/3"}}> Album 3</a></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/4"}}> Album 4</a></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/5"}}> Album 5</a></li>
           <li> <a onClick={() => {window.location.href="http://localhost:3000/detail/6"}}> Album 6</a></li> 
           
        </div>
        
        <ul className="photoList">  
        {photoList && photoList.map((item)=>{
            return <li key={item.id}> 
            
             <ModalImage
                small={item.thumbnail}
                large={item.thumbnail} 
                alt={item.name}
                className="sPic"/>
               
                <span>{item.name}</span> 
                </li>
            })}
        </ul>
      </div>  

    </div>
}

//<img  src={item.thumbnail} width="200" height="230" alt=''></img>  <br/>




