import React, {Component} from 'react';
import '../../CSS/EditProfile.css'
import defaultImage from '../../Assets/Photos/Four.png';
import { storage, database } from '../../firebase';

export default class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favQoute: '',
      funFact: '',
      file: '',
      imagePreviewUrl: ''
    }


  }
  // Saves what is typed into input into state 
  handlefavQouteChange = (e) => {
    this.setState({favQoute: e.target.value});
  }

  // Saves what is typed into input into state 
  handlefunFactChange = (e) => {
    this.setState({funFact: e.target.value});
  }

  // #Can this be done better? 
  // Clears form
  componentWillReceiveProps(nextProps){
      this.setState({favQoute: ''});
      this.setState({funFact: ''});
  }

  updateDataAboutUser = (e) => {
      e.preventDefault(e)
      let {indexNumberOfUser } = this.props;
      let newfavQoute = this.state.favQoute
      let newfunFact = this.state.funFact
      this.props.EditUserProfile(indexNumberOfUser,newfavQoute, newfunFact)
  } 

  newPhoto = (e) => {
      let file = e.target.files[0];

  }




  render(){
    return(
  <div id="myModal" className="modal fade" role="dialog">
   <div className="modal-dialog">
      <div className="modal-content">
         <div className="header">
              <div> Edit Profile </div>
         </div>
         <div className="modal-body">
              <div className="profile_edit">

               <input id="myInput" type="file" onChange={e => this.newPhoto(e)}

                ref={(ref) => this.upload = ref} style={{ display: 'none' }} />

               <img className="mug_shot_edit" alt="mug shot" src={defaultImage} 
               onClick={(e) => this.upload.click() }
               />
              <div className="person_desc">
                <div className="title_name_edit_profile">  {this.props.EditUser.modalUser.title} </div>
                <div className="title_name_edit_profile"> {this.props.EditUser.modalUser.name}, <span> {this.props.EditUser.modalUser.city}</span>
                </div>
                <div> {this.props.EditUser.modalUser.phone} </div>
               <div> {this.props.EditUser.modalUser.email}</div>
                <div> EA: {this.props.EditUser.modalUser.EA}</div>
              </div>
            </div>
            <div className="data_to_change"> 
               <input type="text" 
                      placeholder={this.props.EditUser.modalUser.favQoute || 'Favorite Qoute is not set yet.'}
                      onChange={this.handlefavQouteChange}
                      value={this.state.favQoute}
                      /> 
                 <span className="label"> Fun Fact </span> 
                 <input type="text" 
                        placeholder={this.props.EditUser.modalUser.funFact || 'Fun Fact is not set yet.'}
                        onChange={this.handlefunFactChange}
                        value={this.state.funFact}
                        />
            </div>


         </div>
         <div className="modal-footer">
                 <button className="cancel" data-dismiss="modal"> Cancel </button>
                  <button onClick={this.updateDataAboutUser}
                     data-dismiss="modal"
                     className="save"> Save </button>
               
         </div>
      </div>
   </div>
</div>


      )
  }


}
