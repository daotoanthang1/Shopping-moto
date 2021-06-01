import React, { useEffect } from 'react';
import { useState } from 'react';
import "./MotoPlaceFavorite.scss"
import axios from "axios";
const MotoPlaceFavorite = () => {
    const [famousPlaces, setFamousPlaces] = useState([])
    useEffect(() => {
        const fetchPlaces = async () => {
            const result = await axios("https://5fc0723cfd14be0016749ca0.mockapi.io/Products");
            setFamousPlaces(result.data[1].famousPlaces);
        };
        fetchPlaces()
    }, [])
    return (
        <div className="wrapperStoreSystem">
            <h3 className="title-product">Famous Street</h3>
            <div className="storeSystem">
                {famousPlaces.map((famousPlace,key) => (
                    <div className="storeSystemItem" key={key}>
                        <div className="storeItem">
                            <img src={famousPlace.img} alt="" />
                            <a href="">{famousPlace.middleTitle}</a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


MotoPlaceFavorite.propTypes = {

};


export default MotoPlaceFavorite;
