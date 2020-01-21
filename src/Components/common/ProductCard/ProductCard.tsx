import React from 'react'
import style from './ProductCard.module.scss'
import { CardProduct } from '../../../store/types'
import { Button } from 'react-bootstrap'
import { FaRubleSign } from 'react-icons/fa'

const ProductCard: React.FC<CardProduct> = ({
	id,
	price,
	name,
	image,
	sendMessage
}: CardProduct) => {
	return (
		<div className={style.productCard}>
			<div className={style.container}>
				<div className={style.container__img}>
					<img src={image.toString()} alt={name} />
				</div>
				<div className={style.container__name}>{name}</div>
				<div className={style.container__price}>
					{price} <FaRubleSign />
				</div>
				<div className={style.container__button}>
					<Button
						variant="dark"
						size="lg"
						block
						onClick={() => sendMessage(`${name} успешно добавлен в корзину`)}
					>
						Добавить в корзину
					</Button>
				</div>
			</div>
		</div>
	)
}

export default ProductCard
