import React, { useState, useEffect, useRef } from 'react';

function FetchTitle() {
	const [ id, searchId ] = useState('');
	const [ post, searchPost ] = useState(null);
	const inputId = useRef();

	useEffect(() => {
		fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json()).then((data) => {
			searchPost(data);
			console.log(data);
		});
	});

	const handleClick = () => {
		searchId(inputId.current.value);
	};

	return (
		<center>
			<input type="text" ref={inputId} />
			<button onClick={handleClick}>Set Post</button>
			<br />
			<span>title: {post ? post.title : ''}</span>
			<br />
			<span>body: {post ? post.body : ''}</span>
		</center>
	);
}

export default FetchTitle;
