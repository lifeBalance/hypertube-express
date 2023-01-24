import React from 'react'

const MovieCast = ({cast}) => {
	console.log('cast', cast)
	const castMembers = cast.map((member => {
		return (
			<div key={member.imdb_code} className='flex flex-row flex-start mt-2'>
				<img
					src={member.url_small_image}
					className="ml-5 mr-5 h-[60px] w-[60px]"
				/>
				<div className='flex flex-col items-center'>
					<small style={{fontWeight: 'lighter', fontSize: '12px'}}>{member.name}</small>
					<small style={{fontWeight: 'lighter', fontSize: '12px'}}>as</small>
					<small style={{fontSize: '12px'}}> {member.character_name}</small>
				</div>
			</div>
		)
	}))

	return (
		<div>
			<hr></hr>
			<div className=' p-1 bg-white bg-opacity-5 text-white rounded-md grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
				{castMembers}
			</div>
			<hr></hr>
		</div>
	)
}

export default MovieCast