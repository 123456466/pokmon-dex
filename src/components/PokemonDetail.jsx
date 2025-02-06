import React from "react";

const Detail = ({back,img_url,name,types,description}) => {
  return (
    <div>
      <img src={img_url}/>
      <p>{name}</p>
      <p>{types}</p>
      <p>{description}</p>
      <button onClick={() => back()}>돌아가기</button>
    </div>
  );
};

export default Detail;
