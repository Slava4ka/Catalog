import React from 'react'
import style from './MessageBox.module.scss'
import MyMessage from '../common/MyMessage/MyMessage'
import { Message } from '../../store/types'
import { ApplicationState } from '../../store/store'
import { hideMessageInState } from '../../store/message/action'
import { connect } from 'react-redux'

interface PropsFromDispatch {
	hideMessage: (messageId: number) => any
}

interface PropsFromState {
	message: Array<Message>
}

type AllProps = PropsFromState & PropsFromDispatch

const MessageBox: React.FC<AllProps> = ({ message, hideMessage }: AllProps) => {
	return (
		<div
			className={`${style.messageBox} ${
				!message.length ? style.messageBox_none : ''
			}`}
		>
			{message.map((m, i) => (
				<MyMessage
					key={`${m.id}${new Date().toLocaleString()}__${i}`}
					id={m.id}
					text={m.text}
					showA={m.isVisible}
					toggleShowA={hideMessage}
				/>
			))}
		</div>
	)
}

const mapStateToProps = ({ messages }: ApplicationState) => ({
	message: messages.message
})

const mapDispatchToProps = {
	hideMessage: hideMessageInState
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageBox)
