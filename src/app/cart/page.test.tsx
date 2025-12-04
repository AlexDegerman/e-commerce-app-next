/* eslint-disable react/display-name */

import { render, screen, fireEvent } from '@testing-library/react'
import Cart from './page'
import { useCartStore } from '@/stores/useCartStore';

// Test with npm test in terminal

jest.mock('next/link', () => {
  return ({ children, href }: { children: React.ReactNode; href: string }) => (
    <a href={href}>{children}</a>
  )
})

describe('Cart Component', () => {
  beforeEach(() => {
    useCartStore.setState({ cartItems: [] })
  })

  test('displays empty cart message when cart is empty', () => {
    render(<Cart />)
    expect(screen.getByText('Your cart is empty!')).toBeInTheDocument()
  })

  test('calculates total price correctly', () => {
    useCartStore.setState({
      cartItems: [
        { id: 1, name: 'Product 1', price: 10, quantity: 2, image: 'img1.jpg', description: 'desc' },
        { id: 2, name: 'Product 2', price: 20, quantity: 1, image: 'img2.jpg', description: 'desc' }
      ]
    })

    render(<Cart />)
    expect(screen.getByText('Total Price: $40.00')).toBeInTheDocument()
  })

  test('removes item when remove button is clicked', () => {
    const removeFromCart = jest.fn()
    
    useCartStore.setState({
      cartItems: [
        { id: 1, name: 'Product 1', price: 10, quantity: 1, image: 'img1.jpg', description: 'desc' }
      ],
      removeFromCart
    })

    render(<Cart />)
    
    const removeButton = screen.getByText('Remove')
    fireEvent.click(removeButton)
    
    expect(removeFromCart).toHaveBeenCalledWith(1)
  })

  test('clears cart when remove all button is clicked', () => {
    const clearCart = jest.fn()
    
    useCartStore.setState({
      cartItems: [
        { id: 1, name: 'Product 1', price: 10, quantity: 1, image: 'img1.jpg', description: 'desc' },
        { id: 2, name: 'Product 2', price: 20, quantity: 1, image: 'img2.jpg', description: 'desc' }
      ],
      clearCart
    })

    render(<Cart />)
    
    const clearButton = screen.getByText('Remove all')
    fireEvent.click(clearButton)
    
    expect(clearCart).toHaveBeenCalled()
  })
})