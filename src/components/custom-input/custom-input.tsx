import React from 'react'
import './css/Input.scss'

type FontVariant = 'small' | 'medium'
type Spacing = 'xs' | 's' | 'm' | 'l'

type InputProps = {
	label?: string
	placeholder?: string
	value?: string
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
	fontVariant?: FontVariant
	spacing?: Spacing
	isOptional?: boolean
	isError?: boolean
}

const CustomInput: React.FC<InputProps> = ({
	label,
	placeholder,
	value,
	onChange,
	fontVariant = 'small',
	spacing = 's',
	isOptional = false, // Default is false
	isError = false // Default is false
}) => {
	return (
		<div className='input-container'>
			{label && (
				<label
					className={`input-label input-label--${fontVariant} ${
						isError ? 'input-label--error' : ''
					}`}
					htmlFor='custom-input'>
					{label}
					{isOptional && <span className='input-label-optional'>Optional</span>}
				</label>
			)}
			<input
				id='custom-input'
				className={`input input--${fontVariant} input--spacing-${spacing} ${
					isError ? 'input--error' : ''
				}`}
				type='text'
				placeholder={placeholder}
				value={value}
				onChange={onChange}
			/>
		</div>
	)
}

export default CustomInput
