import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      instructors: [
        {
          name: 'Tim',
          hobbies: ['sailing', 'react']
        }, {
          name: 'Matt',
          hobbies: ['math', 'd3']
        }, {
          name: 'Colt',
          hobbies: ['css', 'hiking']
        }, {
          name: 'Elie',
          hobbies: ['music', 'es2015']
        }
      ]
    };
    
    setTimeout(() => {
      
      /* INSTRUCTORS EXAMPLE-SOLUTION! */
      
      // const randInst = Math.floor(
      //   Math.random() *
      //   this.state.instructors.length
      //   );

      // const hobbyIndex = Math.floor(
      //   Math.random() *
      //   this.state.instructors[randInst].length
      //   );
        
      //improper way - slice only gives us new array that changes old array directly.
      // const instructors = this.state.instructor.slice();
      // instructors[randInst].hobbies.splice(hobbyIndex, 1);
      
      // const instructors = this.state.instructors.slice();
      // instructors[randInst] = Object.assign({}, instructors[randInst]); //copy of obj into new obj to mess around with.
      // instructors[randInst].hobbies = instructors[randInst].hobbies.slice(); //gen new array we can then use.
      // instructors[randInst].hobbies.splice(hobbyIndex, 1); 
      // this.setState({instructors});
      
    //   const instructors = this.state.instructors.map((inst, i) => {
    //     if (i === randInst) { //if index is on instructor.
    //       const hobbies = [...inst.hobbies]; //copy arr w/ spread ele.
    //       hobbies.splice(hobbyIndex, 1); //splice out what we dont want
    //       return { //return spread + hobbies.
    //         ...inst,
    //         hobbies
    //       }
    //     };
    //     return inst; //if index isn't on instructor we want, return original inst.
    //   });
    //   this.setState({instructors});
    // }, 5000);
  
    /* My ans */
    
    const randInstr = Math.floor(Math.random() * this.state.instructors.length);
    const randHob   = Math.floor(Math.random() * this.state.instructors[randInstr].hobbies.length);
    
    const newState = () => this.state.instructors.map((inst, idx) => {
      if (idx === randInstr) {
        inst.hobbies = inst.hobbies.slice();
        inst.hobbies.splice(randHob, 1);
      }
      return inst;
      
    });
    
    this.setState(newState());
    }, 5000);
  }
  render() {
    const instructors = this.state.instructors.map((instructor, index) => (
      <li key={index}>
        <h3>{instructor.name}</h3>
        <h4>Hobbies: {instructor.hobbies.join(", ")}</h4>
      </li>
    ));
    return (
      <div className="App">
        <ul>
          {instructors}
        </ul>
      </div>
    );
  }
}

export default App;
