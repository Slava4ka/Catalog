import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getProducts } from '../../store/catalog-reducer'
import { Product } from '../../store/types'
import { ApplicationState } from '../../store/store'
import { Spinner } from 'react-bootstrap'

interface PropsFromDispatch {
	getProducts: any
}
interface PropsFromState {
	isFetching: boolean
	productsList: Array<Product>
}

type AllProps = PropsFromState & PropsFromDispatch

const Catalog: React.FC<AllProps> = (props: AllProps) => {
	const { isFetching, productsList, getProducts } = props

	useEffect(() => {
		getProducts()
	}, [])

	return isFetching ? (
		<Spinner animation="border" />
	) : (
		<div>
			<h1>CATALOG</h1>
			{productsList.map(product => product.name)}
		</div>
	)
}

const mapStateToProps = ({ catalog }: ApplicationState) => ({
	isFetching: catalog.isFetching,
	productsList: catalog.productsList
})

const mapDispatchToProps = {
	getProducts: getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(Catalog)
