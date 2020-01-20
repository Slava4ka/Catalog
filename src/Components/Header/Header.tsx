import React from 'react'
import style from './Header.module.scss'
import { Badge, Nav, Navbar } from 'react-bootstrap'

const Header: React.FC = () => {
	return (
		<Navbar
			className={style.header}
			collapseOnSelect
			expand="sm"
			bg="light "
			variant="light"
		>
			<Navbar.Brand href="#home">Catalog-App</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse
				className={style.navbarCollapse}
				id="responsive-navbar-nav"
			>
				<Nav>
					<Nav.Link href="#catalog">Каталог</Nav.Link>
					<Nav.Link href="#cart">
						Корзина
						<Badge className={style.badge} variant="dark">
							0
						</Badge>
					</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Header
