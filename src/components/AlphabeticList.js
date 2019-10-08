import React from 'react'
import {Link} from 'react-router-dom'

function AlphabeticList(){
    const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
    return (
        <div className="row mt-3">
            <div className="col">
                <nav>
                    <ul className="pagination">
                        {alphabet.map(letter => 
                            <li className="item-page" key={letter}>
                                <Link to={"/list/"+letter} className="page-link">{letter}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default AlphabeticList