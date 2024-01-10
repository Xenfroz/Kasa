import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.png'
// import './Rating.scss'

function Rating({rating}) {

    const totalStars = 5

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < totalStars; i++) {
            if (i < rating) {
                stars.push(<img src={starActive} alt="active star" />);
            } else {
                stars.push(<img src={starInactive} alt="inactive star" />);
            }
        }
        return stars;
    };

    return <div className='rating'>{renderStars()}</div>;
}

export default Rating