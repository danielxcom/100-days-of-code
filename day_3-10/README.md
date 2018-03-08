###Going over Intro to State W/ Adv Web Dev

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { favColor: 'red' };
        
        setTimeOut(() => {
            this.setState( {favColor: 'blue'})
        }, 3000);
        
    }
    
    render() {
        return (
        
            <div>
            My favorite color:
            {this.state.favColor}
            </div>
        );
    }
}

After 3 sec this function gets invoed changing red to blue.
Async. this.setState not synchronous. Whenever setstate gets invoked, render() {...} gets changed.

###Not A Pure Function
| - - - |

function doubleVals(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * 2;
    }
    return arr;
}

Ran multiple times, this changes your array.

###Test for Pure Functions
| Can I run it multiple times? | Does it modify inputs? |
function doubleVals(arr) {
    return arr.map(v => v * 2);
}

Doesn't modify. Creates new arr. 


**Ex 2.**
var person = {id: 53, name: 'Tim' };
function addJob(personObj, job) {
    return Object.assign({},
            personObj,
            {job});
            
}
addJob(person, 'Instructor');

use object.assign create new obj w/ params.

**EX.3**
var person = {id: 53, name: 'Tim'}
function addJob(personObj, job) {
    return {...personObj, job};
}

addJob(person, "Instructor");


Point is changes to this.state should always be pure!!!