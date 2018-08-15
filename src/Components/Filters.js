import React, { Component } from 'react'
import '../CSS/Filters.css'

class Filters extends Component{

    constructor () {
        super ()
    }

    render () {

        return (<div class="nav-item" id='filters'>
            <form>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Instrument played" />
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Area" />
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Looking for ..." />
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Musical style" />
                    </div>
                </div>
                <br/>
                <div class="row">
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Skill level" />
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" placeholder="Other ..." />
                    </div>
                </div>
               
            </form>
        
        </div>)
    }


}

export default Filters