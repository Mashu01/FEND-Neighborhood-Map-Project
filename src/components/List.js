import React from 'react';


class List extends React.Component {
	state = {
		open: false
	}
	
	render () {

	const locations = this.props.locations;

		return (			
			<aside>
				<h2>Locations</h2>
				<input type="text" placeholder="Filter Locations" value ={this.props.queryString} onChange={e => this.props.handleChange(e.target.value)}/>
				<ol>
					{locations.map(location =>(
						<li key={location.venue.id}>
							<div>
								<p className="title">
									<button onClick={() => this.props.showInfoContent(location)}>
										{location.venue.name}
									</button>
								</p>
							</div>
						</li>
					))}
				</ol>
			</aside>
		);
	}
}

export default List;