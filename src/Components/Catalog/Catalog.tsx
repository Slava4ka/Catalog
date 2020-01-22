import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../store/catalog/action'
import { Product } from '../../store/types'
import { ApplicationState } from '../../store/store'
import { Col, Container, Row } from 'react-bootstrap'
import { messageToState } from '../../store/message/action'
import style from '../common/style/commonStyle.module.scss'
import ProductCard from '../common/ProductCard/ProductCard'
import MySpinner from '../common/MySpinner/MySpinner'
import { addToCart } from '../../store/cart/action'

interface PropsFromDispatch {
	getProducts: any
	showMessage: (text: string) => any
	addToCart: (id: number) => any
}

interface PropsFromState {
	isFetching: boolean
	productsList: Array<Product>
}

type AllProps = PropsFromState & PropsFromDispatch

const Catalog: React.FC<AllProps> = (props: AllProps) => {
	const {
		isFetching,
		productsList,
		getProducts,
		showMessage,
		addToCart
	} = props

	useEffect(() => {
		getProducts()
	}, [])

	return isFetching ? (
		<MySpinner />
	) : (
		<Container>
			<h1 className={style.title_margin}>Каталог</h1>
			<Row>
				{productsList.map(product => (
					<Col
						md={4}
						sm={6}
						xs={12}
						key={product.id.toString() + product.image.toString()}
						className={style.col_margin}
					>
						<ProductCard
							id={product.id}
							image={product.image}
							name={product.name}
							price={product.price}
							sendMessage={showMessage}
							addToCart={addToCart}
						/>
					</Col>
				))}
			</Row>
		</Container>
	)
}

const mapStateToProps = ({ catalog }: ApplicationState) => ({
	isFetching: catalog.isFetching,
	productsList: catalog.productsList
})

const mapDispatchToProps = {
	getProducts: getProducts,
	showMessage: messageToState,
	addToCart: addToCart
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
