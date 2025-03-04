'use client'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import CustomInput from './custom-input/custom-input'

const FormExample: React.FC = () => {
	const {
		control,
		handleSubmit,
		formState: { errors }
	} = useForm({
		defaultValues: {
			name: ''
		}
	})

	const [isError, setIsError] = useState(false)

	const onSubmit = (data: any) => {
		console.log('Form Data:', data)
		if (!data.name) {
			setIsError(true)
		}
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='name'
				control={control}
				render={({ field }) => (
					<CustomInput
						label='Input'
						placeholder='Placeholder'
						value={field.value}
						onChange={field.onChange}
						fontVariant='small'
						spacing='s'
						isOptional={true}
						isError={isError || !!errors.name}
					/>
				)}
			/>
			<br />
			<button type='submit'>Odoslať</button>
		</form>
	)
}

export default FormExample
