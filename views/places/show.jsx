const React = require('react')
const Def = require('../default')

function show({ place }) {
    console.log(place)
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not rated yet!
        </h3>
    )
    <a href="" className="btn btn-warning"> 
        Edit
        </a>  
        <form method="POST" action=""> 
        <button type="submit" className="btn btn-danger">
            Delete
        </button>
        </form>     

}

module.exports = show

