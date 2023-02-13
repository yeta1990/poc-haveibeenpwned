import Header from '@/layout/Header.js'
import Form from '@/components/Form.js'

export default function Layout() {
	return (
		<>

		<Header />
		<div className="container">
			<div className="row">
					<main><Form /></main>
			</div>
		</div>
		</>
	)
}
