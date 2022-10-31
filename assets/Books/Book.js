import React from "react";
import {useParams} from "react-router-dom";
import {useFetchData} from "../customHooks/useFetchData";
import Loading from "../Loading/Loading";

const Book = () => {

    const {id} = useParams();
    const {isLoading, data} = useFetchData("app_book_by_id", {'id' : id});

    if(data[0]) {
        const details = data[0]['book'];
        const {author, price, releasedYear, name, image, pageNumber, description, storedAmount} = details;
        const genreName = data[0]['genreName'];

        return (
            <>
                <div>{isLoading ? <Loading/> : ''}</div>

                <div className="card p-4 my-2 w-75 mx-auto">
                    <h2>{name}</h2>
                    <hr/>
                    <div className="d-flex">
                        <div className="col-5 ps-5">
                            <img src={image} alt="picture of book" width={250} height={320}/>
                            <br/>
                            <br/>
                            <p>
                                <span className="fw-semibold">Author:</span> {author}
                                <br/>
                                <span className="fw-semibold">Genre:</span> {genreName}
                                <br/>
                                <span className="fw-semibold">Pages:</span> {pageNumber}
                                <br/>
                                <span className="fw-semibold">Year:</span> {releasedYear}
                                <br/>
                                <span className="fw-semibold">Amount left:</span> {storedAmount}
                                <br/>
                                <br/>
                                Price: <b className="text-danger">${price}</b>
                            </p>
                        </div>
                        <div className="col-7">
                            <p>{description}</p>
                        </div>
                    </div>
                    <br/>
                    <button className="btn btn-warning">Add to cart</button>
                </div>
            </>
        );

    }
}

export default Book;