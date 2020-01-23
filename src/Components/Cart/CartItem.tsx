import React from 'react'
import cartStyle from './Cart.module.scss'
import { Button, Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap'
import { GoDash, GoPlus } from 'react-icons/go'
import { FaRubleSign } from 'react-icons/fa'
import { FiTrash2 } from 'react-icons/fi'
import { CartPosition } from '../../store/types'

interface CartItemPattern {
	item: CartPosition
	addToCart: (id: number) => any
	removeFromCart: (id: number) => any
	dropFromCart: (id: number) => any
}

const CartItem: React.FC<CartItemPattern> = (props: CartItemPattern) => {
	const {
		item: { product, quantity },
		addToCart,
		removeFromCart,
		dropFromCart
	} = props

	return (
		<Row className={cartStyle.item}>
			<Col md={2} sm={12} xs={12}>
				<div className={cartStyle.item__image}>
					<img
						src={product.image.toString()}
						alt={`image of ${product.name}`}
					/>
				</div>
			</Col>
			<Col md={4} sm={12} xs={12}>
				<div className={cartStyle.item__name}>{product.name}</div>
			</Col>
			<Col md={3} sm={12} xs={12}>
				<div className={cartStyle.quantity_control}>
					<Button
						variant="outline-dark"
						onClick={() => removeFromCart(product.id)}
					>
						<GoDash />
					</Button>
					<div className={cartStyle.quantity_control__value}>{quantity}</div>
					<Button variant="outline-dark" onClick={() => addToCart(product.id)}>
						<GoPlus />
					</Button>
				</div>
			</Col>
			<Col md={2} sm={6} xs={6} className={cartStyle.noPadding}>
				<div className={cartStyle.item__price}>
					{product.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}
					<FaRubleSign />
				</div>
			</Col>
			<Col md={1} sm={6} xs={6}>
				<div className={cartStyle.item__trash}>
					<OverlayTrigger
						key="bottom"
						placement="bottom"
						overlay={
							<Tooltip id="tooltip-bottom">
								<strong>Убрать</strong>
							</Tooltip>
						}
					>
						<FiTrash2
							onClick={() => dropFromCart(product.id)}
							size={'1.6rem'}
						/>
					</OverlayTrigger>
				</div>
			</Col>
		</Row>
	)
}

export default CartItem
