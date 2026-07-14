import CartEntry from '@/components/cart-entry'
import CartSummary from '@/components/cart-summary'
import { getCart } from '@/lib/actions'

export default async function CartPage() {
  const cart = await getCart()
  
  return (
    <main className='container mx-auto py-4'>
      {!cart || cart.items.length === 0 ? (
        <div className='text-center'>
          <h2 className='text-2xl'>
            Your cart is currently empty
          </h2>
          <p className='text-muted-foreground'>
            Add some items to your cart to get started.
          </p>
        </div>
      ) : ( 
        <>
          <div className='flex flex-col'>
            {cart.items.map((item) => (
              <CartEntry
              key={item.id}
                cartItem={item}
              />
            ))}  
          </div>
          <CartSummary />  
        </>
      )}
    </main>
  )
}