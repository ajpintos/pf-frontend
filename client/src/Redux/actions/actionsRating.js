import { GET_RATINGS } from "../types/typesRating";

export const getProductsRating = (allProducts) => {
  const ratingProducts = allProducts.sort((a,b) => {
    if ( a.averageRating < b.averageRating) return 1;
    else if ( a.averageRating > b.averageRating) return -1;
    else return 0;
  }).slice(0,4);
  console.log('ratingProducts ', ratingProducts);
  return {
    type: GET_RATINGS,
    payload: ratingProducts,
  };
;}


// <div class="product">
//   <h2>Producto 1</h2>
//   <div class="rating">
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//     <span class="star">&#9733;</span>
//   </div>
// </div>

// .star {
//   font-size: 20px;
//   color: gray;
//   cursor: pointer;
// }

// .star.active {
//   color: gold;
// }

// // Obtén todos los elementos de clase 'star'
// const stars = document.querySelectorAll('.star');

// // Asigna un evento 'click' a cada estrella
// stars.forEach((star, index) => {
//   star.addEventListener('click', () => {
//     // Marca como activa todas las estrellas anteriores y la estrella actual
//     for (let i = 0; i <= index; i++) {
//       stars[i].classList.add('active');
//     }

//     // Desmarca todas las estrellas siguientes a la estrella actual
//     for (let i = index + 1; i < stars.length; i++) {
//       stars[i].classList.remove('active');
//     }
//   });
// });


