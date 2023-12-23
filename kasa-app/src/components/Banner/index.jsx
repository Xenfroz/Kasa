import './Banner.scss'

function Banner({ image, citation }) {
  return (
    <div className="banner-container">
      <img src={image} alt="Bannière" className="banner-image" />
      <div className="banner-text">
        <p>{citation}</p>
      </div>
    </div>
  );
}
  
export default Banner