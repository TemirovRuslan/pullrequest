import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostRequestHooks() {
    const [articleId, setArticleId] = useState(null);
	const [articleTitle, setArticleTitle] = useState(null);

    useEffect(() => {
        //POST данные добавляются в тело, а не в URI
        const article = { title: 'Ruslan' , id : 6 };
        axios.post('https://reqres.in/api/articles', article)
            .then(response => {
				setArticleId(response.data.id)
				setArticleTitle(response.data.title)
			})
			

    // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);

    return (
        <div className="card text-center m-3">
            <h5 className="card-header">POST Request with React Hooks</h5>
            <div className="card-body">
				{/* данные которые мы передали в тело  */}
                Returned Id: {articleId}
				<br/>
				{/* данные которые мы передали в тело  */}
				Returned Title: {articleTitle}
            </div>
        </div>
    );
}

export { PostRequestHooks };
