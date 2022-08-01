import './index.scss';

const StarRating = ({ rating }) => {
    const MAX_STARS = 5;
    const stars = Array(MAX_STARS).fill(0);
    
    for (var i = 0; i < rating; i++) {
        stars[i] = 1;
    }

    return (
        <div className="rating">
            {stars.map((star, i) => {
                return (
                    star === 1 ? <span class="fa fa-star checked" /> : <span class="fa fa-star" />
                  )
            })}
        </div>
    );
}

export default StarRating;

