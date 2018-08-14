import React, { Component } from 'react';
import '../CSS/ProfilePic.css'



class ProfilePic extends Component {
    render() {
        return <div className = "profile">
            <img src={this.props.src} className="profilePic"/>
                <br/>
                <br/>

<div class="accordion" id="accordionExample">


     <div>
        <button className = "btn"  type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          Bio
        </button>
      </div>
 

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit
      </div>
    </div>
  

    <div>
        <button className = "btn" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          Instruments
        </button>
    </div>


    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
        Anim pariatur cliche reprehenderit
      </div>
    </div>
 

    <div>
        <button  className = "btn" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          Connections
        </button>
     </div> 

    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>


  
</div>




        
            
            </div>

      }
  }


export default ProfilePic;