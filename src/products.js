import game from "./i1.png"
import fone from "./fon.png"
function Products(){
    return (
        <div className="products">
            <div className="product-card">
                <div className="top-card">
                    <div className="image-card">
                        <img src={game} alt="222"/>
                    </div>
                    <div className="btn-card">
                        <div className="title">Rust</div>
                        <div className="describe">#выживание #крафтинг</div>
                        <div className="But">
                            <p className="Price">$15.99</p>
                            <button>Buy</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;