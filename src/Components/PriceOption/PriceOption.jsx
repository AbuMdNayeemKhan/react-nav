import { PropTypes } from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className='border border-red-300 m-3 p-5 rounded-lg bg-blue-300'>
            <h2>
                <span className='text-7xl'>{price}</span>
                <span className='text-3xl'>/mon</span>
            </h2>
            <h3 className='text-2xl'>{name}</h3>
            <ul>
                {
                    features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
                }
            </ul>
        </div>
    );
};
PriceOption.propTypes = {
    option: PropTypes.object
}
export default PriceOption;