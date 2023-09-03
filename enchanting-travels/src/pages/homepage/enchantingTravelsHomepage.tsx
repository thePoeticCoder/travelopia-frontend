import CustomerReviews from '../../components/review-cards/customerReviews';
import Featured from '../../components/featured-cards/featured';
import ImgSlides from '../../components/img-promotion-slides/imgSlides';

const EnchantingTravelsHomepage = ()=>{
	return (
		<div style={{paddingTop:"2rem"}}>
	 <ImgSlides/>
	 <Featured/>
   <CustomerReviews/>
   </div>
	)
}

export default EnchantingTravelsHomepage;