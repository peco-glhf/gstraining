import React, {useState, useEffect} from 'react';

const BookList = props => {
    const [bookData, setBookData] = useState(null);

    useEffect(() => {
        const result = props
        .getData?.(props.language)
        .then(response => setBookData(response));
        console.log(bookData)
    }, [props])

    useEffect(() => {
        console.log(bookData)
    }, [bookData])

    return (
        <div>
            <ul>
                {
                    bookData === null ?(
                        <p>now loading...</p>
                    ):( 
                        bookData.data.items.map((x, index) => (
                        <li key={index}>{x.volumeInfo.title}</li>
                        ))
                    )
                }
            </ul> 
        </div>
    )
}

export default BookList;
