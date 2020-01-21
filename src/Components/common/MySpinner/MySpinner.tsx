import React from 'react'
import style from './MySpinner.module.scss'
import Spinner from 'react-bootstrap/Spinner'

const MySpinner: React.FC = () => {
	return <Spinner className={style.position} animation="border" />
}

export default MySpinner
