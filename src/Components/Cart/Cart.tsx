import React from 'react'
import { Container } from 'react-bootstrap'
import style from '../common/style/commonStyle.module.scss'
import CartItem from './CartItem'
import cartStyle from './Cart.module.scss'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store/store'
import {
	addToCart,
	dropFromCart,
	removeFromCart
} from '../../store/cart/action'
import { CartPosition } from '../../store/types'

interface PropsFromDispatch {
	products: Array<CartPosition>
	totalPrice: number
}

interface PropsFromState {
	addToCart: (id: number) => any
	removeFromCart: (id: number) => any
	dropFromCart: (id: number) => any
}

type AllProps = PropsFromState & PropsFromDispatch

const Cart: React.FC<AllProps> = (props: AllProps) => {
	const {
		products,
		totalPrice,
		addToCart,
		removeFromCart,
		dropFromCart
	} = props

	return (
		<div>
			<Container>
				<h1 className={style.title_margin}>Корзина</h1>
				<div className={cartStyle.itemsList}>
					{products.length > 0 ? (
						products.map((p, index) => (
							<CartItem
								key={index}
								item={p}
								totalPrice={totalPrice}
								addToCart={addToCart}
								removeFromCart={removeFromCart}
								dropFromCart={dropFromCart}
							/>
						))
					) : (
						<h1>Корзина пуста</h1>
					)}
				</div>
			</Container>
		</div>
	)
}

const mapStateToProps = ({ cart }: ApplicationState) => ({
	products: cart.products,
	totalPrice: cart.totalPrice
})

const mapDispatchToProps = {
	addToCart,
	removeFromCart,
	dropFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
