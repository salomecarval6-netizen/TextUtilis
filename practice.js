let name="<b>SALOME</b>"  //will be displayed as it is that is external html not applied

const image={
  name:"wELCOME",
  imgUrl:"https://static.vecteezy.com/system/resources/thumbnails/025/249/650/small/welcome-sign-calligraphic-inscription-with-smooth-lines-and-modern-text-style-for-use-in-greeting-card-banner-template-postcard-free-vector.jpg",
  imgSize:90
}

function App() {
  return (
    <>
    <nav>
    <li>HOME</li>
    <li>ABOUT US</li>
    <li>CONTACT</li>
    </nav>
    
    <div>
      <h1>HELLO {name} </h1>  
      <img className='imgTag'
      //{console.log(image.name)}
      src={image.imgUrl}
      alt={image.name} // Good practice to include an alt tag
      style={{
          width: image.imageSize,
          height: image.imageSize
        }}
      />
    </div>
    </>
  );
}