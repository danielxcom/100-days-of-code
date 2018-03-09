onClick sample:

--class ClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'tim'};
    }
    render() {
        return (
        <div>
            <p>{this.state.name}</p>
            <button type="button"
                onClick={() => this.setState({name: Tim})}>
                UPPERCASE
                </button>
        </div>
        )
    }
}

##clickhandler a method.
*any name uppercased*

class ClickExample extends Component {
    constructor(props) {
        super(props);
        this.state = {name: 'tim' }
        this.handleClick = this.handleClic.bind(this); //secures the this.setState no matter differentiation.
    }
    handleClick(e) { //callbac required whenever new state relies on old state.
        this.setState((prevState, props) => ({
            name: prevState.name.toUpperCase() //prevState - original state is uppercased.
        });
    }
    render() {
        return (
        <div>
            <p>{this.state.name}</p>
            <button type="button"
                onClick={() => this.setState({name: Tim})}>
                UPPERCASE
                </button>
        </div>
        )
    }
}


*Recognizable pattern* - Where we put a callback in constructor and bind it.


###Common Error

<button type="button" onClick={this.handleClick()}>

handleClick() function will automatically be invoked and not on the event.

Don't accidentally invoke your callback functions inside of your eventhandlers.

####Forms

*Unctronolled Component*

    <input type="text" />

React is not aware of what the user is typing, the browser is in charge of state.

*Controlled Component*

    <input type="text" value={this.state.inputText}/>
    
React is now in control of the state via this.state.inputText, but the input can't be updated.


*Controlled Component W/ Update*

    <input
        type="text"
        name="inputText"
        value={this.state.inputText}
        onChange={(e)=>{ //type  single key.
            this.setState({inputText: e.target.value})
        }}
    />
    
React is now in control of the state via this.state.inputText and the state can change via onChange.

*onSubmit*

    <form onSubmit={(e)=> {
        e.preventDefault();
        const data = [...this.state.data,
                    this.state.inputText];
        this.setState({data, inputText: ''});
    }}>
    <input
        type="text"
        name="inputText"
        value={this.state.inputText}
        onChange={(e)=> {
            this.setState({[e.target.name]: e.target.value})
        }}
        />
    </form>
    
e is event
preventDefault for browser. W/o it whole page refreshes.
Update data array in const data.
this.state.inputText changes to whatever val we input.
inputText:'', clear form when we enter.

onSubmit captures a lot of behaviors that onClick doesn't.
onSubmit = capture what is being submitted in form.


    
    
    
    



