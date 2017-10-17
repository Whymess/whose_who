1.	Layout of application. 


a.	The application is organized with components and containers. Let’s first discuss the containers of the application. The ProfileRowContainer distributes state and actions to the ProfileRow component.  There is one action contained in this container, which manages the DefaultUsers state.   The purpose of this action is to set the state of the modal that is selected. This action accepts the index of the user and the list of users. 

The EditProfileContainer considers one action and two states.  The indexNumberOfUser is the index of the current user and EditUser is the list of users that will potentially be edited. This container also contains an action, EditUserProfile that accepts the index of user, their new favorite quote and their new fun fact. 

The components are pretty straightforward. The ProfileRow component maps over the list of users, feeding their individualized information into the Profile component and displaying the list of users. 


