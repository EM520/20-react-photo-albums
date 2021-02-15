import {useState,useEffect} from "react"
import {Link} from "react-router-dom"
export default function Album(){
    const[albums,setAlbums] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:3001/albums`)
        .then((resp)=>resp.json())
        .then((data)=>{
           //console.log("data",data)
            setAlbums(data)
        })
    },[])
    console.log(albums)
    return(
        <div className="App">
            <h1>My Albums</h1>
            <ul className="albumsList">
            {albums.map((album)=>{
                console.log(album.id)
                return <li>     
                <Link className="albumLink" to={`/detail/${album.id}`} >
                    <img className="albumList" src={album.thumbnail} width="220" height="230" alt=''></img> <br/>
                    <span>{album.name}</span>
                </Link>
                </li>
            })}
            </ul>
        </div>
    )}

   