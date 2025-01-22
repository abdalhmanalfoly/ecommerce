import {useStripe, useElements,PaymentElement} from '@stripe/react-stripe-js';
import Breadcraump from '../../_components/Breadcraumb';
import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../../_context/CartContext';
import { useUser } from '@clerk/nextjs';
import OrderApis from '../../_Uitels/OrderApis'
import cartApis from '../../_Uitels/cartApis';
import { useRouter } from 'next/navigation';

const CheckoutForm = ({amount}) => {
  const {cart,setCart} = useContext(CartContext)
  const {user} = useUser()
    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter()
      
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
  
    const handleSubmit = async (event) => {
      // We don't want to let default form submission happen here,
      // which would refresh the page.
      event.preventDefault();
  
      if (!stripe || !elements) {
        // Stripe.js hasn't yet loaded.
        // Make sure to disable form submission until Stripe.js has loaded.
        return;
      }
      
      const handlePaymentSuccess = () => {
        router.push('/payment-confirm?paymentStatus=success'); // إعادة التوجيه بدون refresh
      };
      


      const handleError = (error) => {
        setLoading(false);
        setErrorMessage(error.message);
      }

      
      
  createOrder();

  sendEmail();
  // Trigger form validation and wallet collection
  const {error: submitError} = await elements.submit();
  if (submitError) {
    handleError(submitError);
    return;
  }


  const res = await fetch('api/create-intent', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ amount }),
      });

      const clientSecret = await res.json()
  
      const result = await stripe.confirmPayment({
        clientSecret,
        elements,
        confirmParams: {
          return_url: `${window.location.origin}${handlePaymentSuccess()}`, 
        },
      });
  
      if (result.error) {
        // Show error to your customer
        console.log(result.error.message);
      } else {
        window.location.replace("http://localhost:3000/payment-confirm");
      }
    };
  


    const path='/Checkout payment'
    const createOrder = () => {
      let productIds = [];
      cart.forEach((el) => {
        console.log(el);
        productIds.push(el?.product?.[0]?.documentId);
      });
    
      const data = {
        data: {
          email: user.primaryEmailAddress.emailAddress,
          userName: user.fullName,
          amount,
          products: productIds,
        },
      };
    
      OrderApis.createOrder(data)
        .then((res) => {
          if (res) {
            const updatedCart = [...cart];
            
            cart.forEach((el) => {
              cartApis.deleteCartItem(el.id).then(() => {
                const index = updatedCart.findIndex((item) => item.id === el.id);
                if (index !== -1) {
                  updatedCart.splice(index, 1); 
                }
                setCart(updatedCart);
                localStorage.setItem("cart", JSON.stringify(updatedCart));
              });
            });
          }
        })
        .catch((err) => {
          console.error("Error creating order:", err);
        });
    };
    
    useEffect(() => {
      const savedCart = localStorage.getItem("cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart)); 
      }
    }, []);
    
    
    const sendEmail = async () => {
      try {
        const res = await fetch('api/send-email', {
          method: 'POST',
        });
    
        if (!res.ok) {
          throw new Error('Failed to send email');
        }
    
        const result = await res.json();
        console.log('Email sent successfully:', result);
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

  return (
    <form onSubmit={handleSubmit}>
        <Breadcraump path={path}/>
        <div className='mx-14 mt-12'>
        <PaymentElement />
        <button className='p-3 bg-gray-900 rounded-xl hover:bg-gray-800 text-white mb-1 mt-3 w-[100%]'>Submit</button>
        </div>
    </form>
  );
};

export default CheckoutForm;