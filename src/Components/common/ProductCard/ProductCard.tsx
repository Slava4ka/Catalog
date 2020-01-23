import React, { useState } from 'react'
import style from './ProductCard.module.scss'
import { CardProduct } from '../../../store/types'
import { Button } from 'react-bootstrap'
import { FaRubleSign } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const ProductCard: React.FC<CardProduct> = ({
	id,
	price,
	name,
	image,
	sendMessage,
	addToCart
}: CardProduct) => {
	const history = useHistory()
	const [clickStatus, setClickStatus] = useState<boolean>(false)

	const onClickHandle = () => {
		if (clickStatus) {
			history.push('/cart')
		} else {
			addToCart(id)
			sendMessage(`${name} успешно добавлен в корзину`)
			setClickStatus(true)
		}
	}

	return (
		<div className={style.productCard}>
			<div className={style.container}>
				<div className={style.container__img}>
					<img src={image.toString()} alt={name} />
				</div>
				<div className={style.container__name}>{name}</div>
				<div className={style.container__price}>
					{price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')}{' '}
					<FaRubleSign />
				</div>
				<div className={style.container__button}>
					<Button
						variant="dark"
						size="lg"
						block
						onClick={() => onClickHandle()}
					>
						{clickStatus ? 'Оформить заказ' : 'Добавить в корзину'}
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
