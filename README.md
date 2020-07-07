
Status - App works Successfully

Frist install npm and run command npm start for this folder

I uses redux for data store of score,redux work as centralizes data storage for application.

First start with test data
1. first to create react app  -:  npx create-react-app my-app

2.install redux and all dependency like redux thunk 

3.when pages load first time call componentDidMount life cycle to dispatch action->
   in action to store hardcoaded string of data and then create action creator with payload data to reducer to store in state and store connected to Ul Component.

4.when user type country name  using handler set state CountryName with type value.

5.when submit button click another handler call and dispatch action with country Name  and typeOfScore (when user click on radio button set state typeOfScore with value of radio button)

6.depend upon action type data operation takes place in reducer and  retrun state with two paramter Average_score,BarWidth to Ui Component(View page).

7.if country name does not match it return value paramter of 0 it display average score = - and bar width to 0 that is bar is not display this handle in ui componenet page

8.same when user click on server state set with value of radio button then dispatch action with  api call take place and output payload to reducer to further opertaion in reducer and retrun to value to ui component.

9.for api call there is one error like cross origin resources sharing(cors) while fetching data to solve using add this part url "https://cors-anywhere.herokuapp.com/" to api

10.depend upon data like test data or server data  in reducer data is handle and returbn back to ui component

11.Also responsive part also completed according to given condition

