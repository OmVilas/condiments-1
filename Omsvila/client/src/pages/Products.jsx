// import React from 'react';
// import ProductCard from '../components/ProductCard';
// import milagumurukkuImg from '../assets/images/milagumurukku.jpg';
// import palakImg from '../assets/images/Palak.jpg';
// import garlicImg from '../assets/images/garlic.jpg';
// import ribbonImg from '../assets/images/ribbonpakoda.jpg';
// import thattaiImg from '../assets/images/thattai.jpeg';

// const products = [
//   {
//     image: milagumurukkuImg,
//     name: 'Milagu Murukku',
//     desc: 'Peppery and crunchy spiral snack, a spicy twist on the classic.',
//     price: 80,
//   },
//   {
//     image: palakImg,
//     name: 'Palak Sev',
//     desc: 'Crunchy spinach-flavored thin noodle snack, perfect for munching.',
//     price: 95,
//   },
//   {
//     image: garlicImg,
//     name: 'Garlic Mixture',
//     desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
//     price: 110,
//   },
//   {
//     image: ribbonImg,
//     name: 'Ribbon Pakoda',
//     desc: 'Crispy ribbon-shaped snack with mild spice and crunch.',
//     price: 85,
//   },
//   {
//     image: thattaiImg,
//     name: 'Thattai',
//     desc: 'Traditional crispy and flat rice flour snack, great with chutney or tea.',
//     price: 70,
//   },
//   {
//     image: garlicImg,
//     name: 'Garlic Mixture',
//     desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
//     price: 110,
//   },
// ];

// const Products = () => {
//   return (
//     <section className="products-section py-5">
//       <div className="container">
//         <h2 className="section-title text-start mb-5">
//           Our <span className="">Products</span>
//         </h2>

//         <div className="row g-4">
//           {products.map((item, i) => (
//             <div key={i} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
//               <ProductCard {...item} />
//             </div>
//           ))}
//         </div>

//         {/* Centered View All Button */}
//         <div className="text-center mt-5 ">
//           <button className="btn btn-primary text-white px-4 py-2">
//             View All Products
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

import React from 'react';
import ProductCard from '../components/ProductCard';

import milagumurukkuImg from '../assets/images/milagumurukku.jpg';
import palakImg from '../assets/images/Palak.jpg';
import garlicImg from '../assets/images/garlic.jpg';
import ribbonImg from '../assets/images/ribbonpakoda.jpg';
import thattaiImg from '../assets/images/thattai.jpeg';

const products = [
  {
    image: milagumurukkuImg,
    name: 'Milagu Murukku',
    desc: 'Peppery and crunchy spiral snack, a spicy twist on the classic.',
    price: 80,
  },
  {
    image: palakImg,
    name: 'Palak Sev',
    desc: 'Crunchy spinach-flavored thin noodle snack, perfect for munching.',
    price: 95,
  },
  {
    image: garlicImg,
    name: 'Garlic Mixture',
    desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
    price: 110,
  },
  {
    image: ribbonImg,
    name: 'Ribbon Pakoda',
    desc: 'Crispy ribbon-shaped snack with mild spice and crunch.',
    price: 85,
  },
  {
    image: thattaiImg,
    name: 'Thattai',
    desc: 'Traditional crispy and flat rice flour snack, great with chutney or tea.',
    price: 70,
  },
  {
    image: garlicImg,
    name: 'Garlic Mixture',
    desc: 'Spicy and flavorful mix with the goodness of garlic, perfect with tea.',
    price: 110,
  },
];

const Products = () => {
  return (
    <section className="products-section py-5">
      <div className="container">
        <h2 className="section-title text-start mb-5">
          Our <span className="">Products</span>
        </h2>

        <div className="row g-4">
          {products.map((item, i) => (
            <div key={i} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center">
              <ProductCard {...item} />
            </div>
          ))}
        </div>

        {/* Centered View All Button */}
        <div className="text-center mt-5">
          <button className="btn btn-primary text-white px-4 py-2">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;
