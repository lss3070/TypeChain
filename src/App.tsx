import  React,{Component} from 'react';
import { Input,Form } from './Input';
import Number from "./Number";


interface IState{
  counter:number;
  name:string;

}

class App extends Component<{},IState>{
  state={
    counter:0,
    name:""
  }
  render(){
    const {counter,name}=this.state;
  return <div>
    <Form onFormSubmit={this.onFormSubmit}>
      <Input value={name} onChange={this.onChange}/>
      <Number count={counter}/>
    </Form>
   
  <button onClick={this.add}>Add</button>
  </div>;
  }

  onChange=(event:React.SyntheticEvent<HTMLInputElement>)=>{
    console.log(event.target);
  }

onFormSubmit=(event:React.FormEvent)=>{
  event.preventDefault();
}

 add=()=>{
    this.setState(prev=>{
      return{
        counter:prev.counter+1
      }
    })
  }
}

export default App;
