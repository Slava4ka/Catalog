import React from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import style from '../common/style/commonStyle.module.scss'
import CartItem from './CartItem'
import cartStyle from './Cart.module.scss'
import { connect } from 'react-redux'
import { ApplicationState } from '../../store/store'
import {
	addToCart,
	dropCart,
	dropFromCart,
	removeFromCart
} from '../../store/cart/action'
import { CartPosition } from '../../store/types'
import { Col } from 'react-bootstrap'

interface PropsFromDispatch {
	products: Array<CartPosition>
	totalPrice: number
}

interface PropsFromState {
	addToCart: (id: number) => any
	removeFromCart: (id: number) => any
	dropFromCart: (id: number) => any
	dropCart: () => any
}

type AllProps = PropsFromState & PropsFromDispatch

const Cart: React.FC<AllProps> = (props: AllProps) => {
	const {
		products,
		totalPrice,
		addToCart,
		removeFromCart,
		dropFromCart,
		dropCart
	} = props

	return (
		<div>
			<Container>
				<h1 className={style.title_margin}>Корзина</h1>
				<div className={cartStyle.itemsList}>
					{products.length > 0 ? (
						<div>
							{products.map((p, index) => (
								<CartItem
									key={index}
									item={p}
									addToCart={addToCart}
									removeFromCart={removeFromCart}
									dropFromCart={dropFromCart}
								/>
							))}
							<Row>
								<Col md={6}>
									<Button onClick={dropCart}>Отправть заказ</Button>
								</Col>
								<Col md={6}>{`Итого ${totalPrice}`}</Col>
							</Row>
						</div>
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
	dropFromCart,
	dropCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)
