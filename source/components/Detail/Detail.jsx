import React, { Component } from 'react';
import { Button, Item, Image, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';

import styles from './Detail.scss';

require('./Detail.scss');

/*
						<div key={movie.id} className='detail-card'>
							<h4 className='detail-title'>{movie.name}</h4>
							<h4>{'Rating: ' + movie.vote_average}</h4>
							<p className='detail-overview'>{movie.overview}</p>
							<img className="detail-picture" src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path} />
						</div>


							<Item>
								<Item.Image src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path} size='small'/>
								<Item.Content>
									<Item.Header>{movie.name}</Item.Header>
									<Item.Meta>Description</Item.Meta>
									<Item.Description>{movie.overview}</Item.Description>
								</Item.Content>
							</Item>
*/

function DisplayMovie(props) {
	return(
		<ul className='detail-wrap'>
			{props.movies.map( function(movie, index) {
				if(props.currentMovieId == movie.id) {
					return (
						<div key={movie.id} className='detail-card'>
							<Item>
								<Item.Content>
									<Item.Header as='h3'>{movie.name}</Item.Header>
									<Item.Image src={"https://image.tmdb.org/t/p/w500"+ movie.poster_path} size='small'/>
									<Item.Meta as='h4'>Description</Item.Meta>
									<Item.Description>{movie.overview}</Item.Description>
								</Item.Content>
							</Item>
						</div>
					)
				}
				else {
					return null;
				}
			})}
		</ul>
	)
}

DisplayMovie.propTypes = {
	movies: PropTypes.array.isRequired,
}

class Detail extends Component {
	constructor() {
		super();
		this.state = {
			movies: [],
			currentMovieId: '',
		};
	}
	componentDidMount() {
		axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=1")
			.then((response) => {
				this.setState({movies: response.data.results})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=2");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=3");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=4");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=5");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=6");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=7");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=8");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=9");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				return axios.get("https://api.themoviedb.org/3/tv/popular?api_key=8ff57880be2280976774263f78f86c5e&language=en-US&page=10");
			})
			.then((response) => {
				this.setState({movies: this.state.movies.concat(response.data.results)})
				//console.log("I AM THE MOVIE.jsx" + this.state.movies)
				this.setState({currentMovieId: this.props.match.params.id})
			})
	}
    render() {
        return( // all has to be in one main div
			<div className="Detail-wrapper">
	            <div className="Detail">
					<div className='button-container'>
					<div className='previous-container'>
						<Button className='previous'>Previous</Button>
					</div>
					<div className='next-container'>
						<Button className='next'>Next</Button>
					</div>
					</div>
					{!this.state.movies
						? <p>LOADING</p>
						: <DisplayMovie movies={this.state.movies} currentMovieId={this.state.currentMovieId}/>
					}
	            </div>
			</div>
        )
    }
}

export default Detail;

/*export default function Detail(props) {
	console.log(props.match)
	return <h1>{this.props.match.params.img_id}</h1>
}*/
