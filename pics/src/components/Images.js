import "./ImageList.css"

import React from "react";

const ImageList = (props) => {

 const images=props.images.map(image=>{

return <img alt={image.description} key={image.id} src={ image.urls.regular}/>

})


  return <h1 className="Image-List">{images }</h1>;
};

export default ImageList;
