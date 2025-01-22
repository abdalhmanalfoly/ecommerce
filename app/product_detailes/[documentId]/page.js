'use client';
import Image from 'next/image';
import Breadcraump from '/app/_components/Breadcraumb';
import productApi from '/app/_Uitels/productApi'; 
import React, { useEffect, useState } from 'react';
import ProductPanale from '../_component/ProductPanale';
import ProductInfo from '../_component/ProductInfo';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Sceleton from '/app/_components/Sceleton';
function ProductDetailes({ params }) {
  const path = usePathname();

  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const unwrappedParams = React.use(params); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await productApi.getproductbyid(unwrappedParams.documentId);
        if (res.data.data && res.data.data.length > 0) {
          const fetchedProduct = res.data.data[0];
          setProduct(fetchedProduct);
          fetchRelatedProducts(fetchedProduct.category);
        } else {
          console.error('Product not found!');
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    if (unwrappedParams?.documentId) {
      fetchProduct();
    }
  }, [unwrappedParams]);

  const fetchRelatedProducts = async (category) => {
    if (!category) {
      console.error('Category is undefined!');
      return;
    }
    try {
      const res = await productApi.getproductbyCategory(category);
      setRelatedProducts(res.data.data);
    } catch (error) {
      console.error('Error fetching related products:', error);
    }
  };

  return (
    <div>
      <Breadcraump path={path}/>
      <div className="px-10 py-1 gap-5 sm:gap-5 grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2">
      {product ? (
  <>
    <ProductPanale product={product} />
    <ProductInfo product={product} />
  </>
) : (
  <Sceleton />
)}

      </div>
      {/* Related Products Section */}
      <div className="related-products m-10 hover:cursor-pointer rounded-lg p-1">
        <div className="text-xl text-primary font-bold py-10">Related Courses</div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {relatedProducts.map((relatedProduct) => (
            <Link 
              key={relatedProduct.id} 
              href={`/product_detailes/${relatedProduct.documentId}`}
              passHref
            >
              <div className=" hover:border p-3  shadow-lg rounded-lg border-gray-300 hover:scale-105 transition duration-300 ease-in-out">
                <Image 
                  src={relatedProduct.imgUrl} 
                  alt="img" 
                  width={400} 
                  height={200} 
                  className="w-[400px] rounded-lg transform hover:rotate-3 hover:scale-95 transition duration-300 ease-in-out rounded-t-lg h-[170px] object-cover"
                />
                <div className="line-clamp-1 text-[15px] text-primary p-2 font-roboto font-medium">
                  {relatedProduct.title}
                </div>
                <span className="text-gray-950 rounded-md bg-slate-300 p-1 hover:border">
                  {relatedProduct.price}$
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
  
}

export default ProductDetailes;
