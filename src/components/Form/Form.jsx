import React from 'react'

const Form = ({handleSubmit, handleChange, searchQuery}) => {
  return (
    <form onSubmit={handleSubmit}>
				<input
          name='search'
          type='text'
          className='form'
          value={searchQuery}
          onChange={handleChange}
				/>
			<button type='submit' className='btn'>
				Search
			</button>
		</form>
  )
}

export default Form