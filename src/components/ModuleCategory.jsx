import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const ModuleCategory = ({ categoriesData }) => {
  return (
    <>
      {categoriesData && (
        <div className="my-20 mx-2">
          <div className="text-3xl md:text-5xl md:leading-[60px] pb-10  font-bold">
            Shop By Category
          </div>
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            draggable={true}
            navigation={false}
          >
            {categoriesData?.map((category) => (
              <SwiperSlide key={`category-${category}`}>
                <div className="w-full md:w-fit flex flex-col justify-center items-center cursor-pointer">
                  <Link
                    to={`/products/categoryId/${category}`}
                    className="flex flex-col items-center"
                  >
                    {category === 'smartphones' && (
                      <div>
                        <img
                          src="/assets/Category-images/francesco-1bBCtUAUMFI-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'laptops' && (
                      <div>
                        <img
                          src="/assets/Category-images/clement-helardot-95YRwf6CNw8-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'fragrances' && (
                      <div>
                        <img
                          src="/assets/Category-images/jane-palash-eqDo7KG13vc-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'groceries' && (
                      <div>
                        <img
                          src="/assets/Category-images/maddi-bazzocco-Hz4FAtKSLKo-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'skincare' && (
                      <div>
                        <img
                          src="/assets/Category-images/michela-ampolo-7tDGb3HrITg-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'furniture' && (
                      <div>
                        <img
                          src="/assets/Category-images/curology-6CJg-fOTYs4-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'tops' && (
                      <div>
                        <img
                          src="/assets/Category-images/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'home-decoration' && (
                      <div>
                        <img
                          src="/assets/Category-images/cole-keister-ZN9LhLYCVko-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'womens-shoes' && (
                      <div>
                        <img
                          src="/assets/Category-images/emily-pottiger-Zx76sbAndc0-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'womens-dresses' && (
                      <div>
                        <img
                          src="/assets/Category-images/burgess-milner-OYYE4g-I5ZQ-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'mens-shirts' && (
                      <div>
                        <img
                          src="/assets/Category-images/amir-foghani-3tD-_BXTUlw-unsplash.jpg"
                          alt="logo"
                          className="w-40 h-40 rounded md:w-40 md:h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'mens-shoes' && (
                      <div>
                        <img
                          src="/assets/Category-images/ayrus-hill-FkNIKhdnnjQ-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'mens-watches' && (
                      <div>
                        <img
                          src="/assets/Category-images/sahej-brar-U6rBOaaRNB0-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'womens-watches' && (
                      <div>
                        <img
                          src="/assets/Category-images/mambawatches-SEvTZ0C9zhU-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'womens-bags' && (
                      <div>
                        <img
                          src="/assets/Category-images/laura-chouette-N_N-W32xHMc-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'womens-jewellery' && (
                      <div>
                        <img
                          src="/assets/Category-images/arteum-ro-GKbfUFna-9I-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'sunglasses' && (
                      <div>
                        <img
                          src="/assets/Category-images/apostolos-vamvouras-Pp_nVOuJMTU-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'automotive' && (
                      <div>
                        <img
                          src="/assets/Category-images/jonathan-borba-xRDuEeG1TVI-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'motorcycle' && (
                      <div>
                        <img
                          src="/assets/Category-images/oxana-melis-BuAuuEI2ubM-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category === 'lighting' && (
                      <div>
                        <img
                          src="/assets/Category-images/florian-bernhardt-bnXUaEq9xYQ-unsplash.jpg"
                          alt="logo"
                          className="rounded w-40 h-40 lg:w-60 lg:h-60 object-cover"
                        />
                      </div>
                    )}
                    {category && (
                      <div className="text-lg md:text-xl h-10 hover:font-semibold capitalize">
                        {category}
                      </div>
                    )}
                  </Link>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </>
  );
};

export default ModuleCategory;
