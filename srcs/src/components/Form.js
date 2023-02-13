import axios from "axios"
import { useState, useEffect } from 'react'
import { toSha } from '@/utils/cryptoUtils.js'
import { checkExposedPassword} from '@/services/signupForm.services'

export default function Form() {
	const [email, setEmail] = useState('');
	const [pass, setPass] = useState('');
	const [submission, setSubmission] = useState(false);
//	const [hashPass, setHashPass] = useState('');
	const [exposedPass, setExposedPass] = useState(false);

	useEffect(() => {
		if (submission)
		{
			setSubmission(false);
			async function getData() {
				const a = await checkExposedPassword(pass, setExposedPass);
				console.log(a);
			}
			getData()
		}
	}, [submission])

	function submitForm()
	{
		checkExposedPassword(pass, setExposedPass);
	}

	return (
		<div>
		<form className={"row row-cols-lg-auto g-3 align-items-center"}>
			<div className="form-group">
				<label>
					Email:
				<input 
					type={"email"}
					value = { email }
					onChange = { e => setEmail(e.target.value) }
					className="form-control"
				/>
				</label>
			</div>
			<div className="form-group">
				<label>
					Password:
				<input 
					type={"password"}
					value = { pass }
					onChange = { e => setPass(e.target.value) }
					className="form-control"
				/>
				</label>
			</div>
		</form>
		<button 
			className={"btn btn-primary"} 
			onClick={() => setSubmission(true)}
		>
			Submit
		</button>
		</div>
	)
}
