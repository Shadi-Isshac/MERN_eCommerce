import './Product.css'
import {Link} from 'react-router-dom'

const Product = () => {
  return (
    <div className="product">
        <img src="https://bjs.scene7.com/is/image/bjs/23459?$bjs-Zoom$" alt=""/>

        <div className="product__info">
            <p className="info__name">Product 1</p>
                <p className="info__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ratione numquam recusandae quis repudiandae architecto!
                </p>

            <p className="info__price">14.99</p>

            <Link to={`/product/${1111}`} className='info__buton'>View</Link>
        </div>
    </div>
  )
}

export default Product