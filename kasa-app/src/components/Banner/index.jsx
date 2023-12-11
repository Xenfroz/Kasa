function Banner({image, citation}) {
    return (
      <div>
            <img src={image} alt='Paysage' className='paysage' />
            <h2>{citation}</h2>
      </div>
    )
  }
  
  export default Banner