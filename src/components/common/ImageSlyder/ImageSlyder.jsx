import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import CoreStyles from 'react-awesome-slider/src/core/styles.scss';
import AwesomeSliderStyles from 'react-awesome-slider/src/styles';

const ImageSlyder = ({img, style}) => {

    const slydeImg = img.map( i => {
        return (
            <div className ={style.slyde} data-src={i}></div>
            )
    })

    return (
        <AutoplaySlider play={true}
            cancelOnInteraction={false}
            interval={6000} className = {style.slider} 
            cssModule = {[CoreStyles, AwesomeSliderStyles]} 
            bullets = {false}>
            {slydeImg}
        </AutoplaySlider>
    )
}

const AutoplaySlider = withAutoplay(AwesomeSlider);


export default ImageSlyder;