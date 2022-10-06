import React, { Component } from 'react'
import { Glasses } from './Glasses'
import Header from './Header'
import data from './dataGlasses.json'
import './home.css'
import { GlassesList } from './GlassesList'
import { GlassesDetail } from './GlassesDetail'

export default class Home extends Component {
    ChangeGlasses = (product) => {
        console.log(product)
        this.setState({ dataGlasses: product })

    }

    constructor(props) {
        super(props)

        this.state = {
            dataGlasses: null,
        }
    }
    render() {
        return (
            <div className='BG-Glasses'>
                <Header />
                <div className='container'>
                    <div className='row mt-5'>
                        <Glasses />
                        <GlassesDetail product={this.state.datasGlasse} />
                    </div>
                </div>
                <GlassesList products={data} onSelect={this.ChangeGlasses} />
            </div>
        )
    }
}
