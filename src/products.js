import game from "./i1.png"
import fone from "./fon.png"
function Products(){
const games = [
  {
    title: "Cyber Odyssey 2077",
    image: "https://picsum.photos/seed/cyberpunk2077/400/300",
    teg: ["RPG", "Action", "Open World"],
    price: 2999,
    discount: 40
  },
  {
    title: "Elden Ring: Shadow",
    image: "https://picsum.photos/seed/eldenring/400/300",
    teg: ["Action", "RPG", "Souls-like"],
    price: 3999,
    discount: 0 
  },
  {
    title: "Stardew Valley",
    image: "https://picsum.photos/seed/stardew/400/300",
    teg: ["Simulation", "RPG", "Indie"],
    price: 599,
    discount: 25
  },
  {
    title: "Baldur's Gate 3",
    image: "https://picsum.photos/seed/baldursgate/400/300",
    teg: ["RPG", "Strategy", "Co-op"],
    price: 2499,
    discount: 15
  }
];

function formatPrice(price) {
  return price.toLocaleString('ru-RU') + ' ₽';
}

function renderGames(gamesArray, containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    console.warn(`Контейнер с id "${containerId}" не найден!`);
    return;
  }

  gamesArray.forEach(game => {
    const hasDiscount = game.discount > 0;
    

    const newPrice = hasDiscount 
      ? Math.round(game.price * (1 - game.discount / 100)) 
      : game.price;
    
    // Генерируем HTML для тегов
    const tagsHtml = game.teg.map(tag => `<span class="tag-item1">${tag}</span>`).join('');
    
    // Условный рендеринг: показываем бейдж и старую цену только если есть скидка
    const discountBadgeHtml = hasDiscount 
      ? `<div class="discount-badge1">-${game.discount}%</div>` 
      : '';
      
    const oldPriceHtml = hasDiscount 
      ? `<span class="old-price1">${formatPrice(game.price)}</span>` 
      : '';

    // Собираем итоговую карточку, точно повторяя вашу структуру
    const cardHtml = `
      <div class="game-card1">
        <div class="image-wrapper1">
          <img src="${game.image}" alt="${game.title} Cover" class="game-image1"/>
          ${discountBadgeHtml}
        </div>
        
        <div class="card-content1">
          <h3 class="game-title1">${game.title}</h3>
          
          <div class="tags-row1">
            ${tagsHtml}
          </div>
          
          <div class="card-footer1">
            <div class="price-block1">
              ${oldPriceHtml}
              <span class="new-price1">${formatPrice(newPrice)}</span>
            </div>
            <button class="buy-button1">Buy</button>
          </div>
        </div>
      </div>
    `;
    
    // Добавляем карточку в контейнер
    container.insertAdjacentHTML('beforeend', cardHtml);
  });
}

// 4. Вызов функции (убедитесь, что в вашем HTML есть элемент с id="games-container")
// Пример: <div id="games-container"></div>
document.addEventListener('DOMContentLoaded', () => {
  renderGames(games, 'games-container');
});
    return (
        <div className="products">
            {/* <div className="product-card">
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
            </div> */}

            <div class="game-card1">
    <div class="image-wrapper1">
      <img src="https://picsum.photos/seed/cyberpunk2077/400/300" alt="Game Cover" class="game-image1"/>
      <div class="discount-badge1">-40%</div>
    </div>
    
    <div class="card-content1">
      <h3 class="game-title1">Cyber Odyssey 2077</h3>
      
      <div class="tags-row1">
        <span class="tag-item1">RPG</span>
        <span class="tag-item1">Action</span>
        <span class="tag-item1">Open World</span>
      </div>
      
      <div class="card-footer1">
        <div class="price-block1">
          <span class="old-price1">2 999 ₽</span>
          <span class="new-price1">1 799 ₽</span>
        </div>
        <button class="buy-button1">Buy</button>
      </div>
    </div>
  </div>
            
        </div>
        
    )
}



export default Products;