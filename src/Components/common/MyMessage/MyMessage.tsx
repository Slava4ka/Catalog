import React from 'react'
import { Toast } from 'react-bootstrap'

type MessageListProps = {
	id: number
	text: string
	showA: boolean
	toggleShowA: (id: number) => void
}
const MyMessage: React.FC<MessageListProps> = ({
	id,
	text,
	showA,
	toggleShowA
}: MessageListProps) => {
	const date = new Date()

	return (
		<Toast show={showA} onClose={() => toggleShowA(id)} delay={1500} autohide>
			<Toast.Header>
				<strong className="mr-auto">CatalogApp</strong>
				<small>{`${date.getHours()}:${date.getMinutes()} ${date.toLocaleDateString()}`}</small>
			</Toast.Header>
			<Toast.Body>{text}</Toast.Body>
		</Toast>
	)
}
export default MyMessage
