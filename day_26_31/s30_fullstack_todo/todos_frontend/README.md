##MERN Stack on c9

From todosapi - mongodb + node environments

Keeping Node + MongoDB running, we utilize React.

> node index.js
> ./mongod

*PROBLEM*

todos_frontend, where we put our React view engine, will state:

> ? Something is already running on port 8080. Probably:
  node index.js (pid 3456)
  in /home/ubuntu/workspace/s28_virtual_dom/s30_fullstack_todo/todoapi

Backend server uses 8080. In c9, 8080 is automatic PORT.
Solution: manually setup PORT or type PORT=8081 in node terminal.

This is to free-up 8080 for React app.

##Attaching todos api to React frontend

Creating a TodoList component for React with this...

    componentWillMount() {
            fetch('api/todos')
            .then(data => data.json())
            .then(todos => this.setState({todos}));
        }
        
Gives error in Dev Tools, giving a response page of HTML rather than JSON.
We're getting our own create-react-app.

We want to request 8081 instead of 8080.

        //proxy request. request through diff PORT.
        //create-react-app docs expl.
        //add "proxy":"https://localhost:8081" to package.json

Attach to frontend react package.json

Invalid Host Header error.

Happens when we use cloud editor like c9.

make env file.

> DANGEROUSLY_DISABLE_HOST_CHECK=true 

Note *NEVER* push this on production. Just for develoment purposes.


TodoList contains the api information and error handling

we can use _id created from mongodb
Code below helps us transfer from internal mongodb what tasks were completed.
> style={{
            textDecoration: completed? 'line-through': 'none'
        }}
        

TodoForm contains input button, something we need todo, hit button, create new todo, send request to server, SHOW what was inserted.

PROBLEM:

> class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {inputValue: 'Fill blank...'};
    }
    render() {
        return (
            <div>
                <input type="text" value={this.state.inputValue} 
                />
                <button>Add Todo</button>
            </div>
        )
    }
}

Won't allow us to update our state or form for that matter in textbox.

Solution: 
Create an onChange method and bind it to the constructor.

>  this.handleChange=this.handleChange.bind(this);

> <input 
                    type="text" 
                    value={this.state.inputValue} 
                    onChange={this.handleChange}
                />

Create handleChange to target individual keys

>  handleChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

To render proper POST request we copy/pste our fetch and add to apiurl

> (APIURL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json',
            }),
            body: JSON.stringify({name: val})
        })
        
our method is post. 
we try send val with api expectancy.
so we need to format by api rules. {name:val}

