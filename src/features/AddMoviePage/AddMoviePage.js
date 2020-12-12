import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./AddMoviePage.scss";

const AddMoviePage = ({ addMovieHandle }) => {
    const { register, handleSubmit, errors } = useForm();
    const [ isAdded, setIsAdded ] = useState(false);

    const onSubmit = (values, e) => {
        e.preventDefault();
        console.log(values);
        values.id = Math.random();
        addMovieHandle(values);
        e.target.reset();
        setIsAdded(true);
    };

    return(
        <form className="form" onSubmit={handleSubmit(onSubmit)}>

            <h1>Add your favourite movie</h1>

            {isAdded && <p className="error">Movie was added ;). Check Video List.</p>}

            <div className="form__group">
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    name="title"
                    ref={register({ required: true })}
                />
            </div>
            {errors.title && <p className="error">Add movie title</p>}

            <div className="form__group">
                <label htmlFor="video_url">URL:</label>
                <input
                    type="text"
                    name="video_url"
                    ref={register({ required: true })}
                />
            </div>
            {errors.video_url && <p className="error">Add url to your movie</p>}

            <div className="form__group">
                <label htmlFor="description">Description:</label>
                <textarea
                    type="text"
                    name="description"
                    ref={register({ required: true })}
                />
            </div>
            {errors.description && <p className="error">Describe your movie</p>}

            <button type="submit" className="form__add-movie-btn">ADD MOVIE</button>
        </form>
    );
};

export default AddMoviePage;