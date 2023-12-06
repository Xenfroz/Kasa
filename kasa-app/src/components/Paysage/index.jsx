function Paysage(image,citation) {
    return (
      <div>
            <img src={image} alt='Paysage' className='paysage' />
            <p>{citation}</p>
      </div>
    )
  }
  
  export default Paysage