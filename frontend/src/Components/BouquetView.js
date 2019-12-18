import React, { Component } from 'react'

class BouquetView extends Component {

    componentDidMount = () => {
        // fetch(`http://localhost:3000/bouquet/${bouquet.id}`)
    }

    render () {
        console.log(this.props.location.state.bouquet)
        return (
            <div>

<table>
    <tr>
    <th><img src = {this.props.location.state.bouquet.img_url}></img></th>
    <th>Second Column</th>
    </tr> 
</table>

            </div>
        )
    }


}

export default BouquetView