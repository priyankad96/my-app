import React,{Component} from 'react';
/*import Button from 'antd/lib/button';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import UiPage from './components/UiPage';
import Counter from './components/Counte';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import NameList from './components/NameList';
import StyleSheet from './components/StyleSheet';
import Form from './components/Form';
import LifecycleA from './components/LifecycleA'
import Fragment from './components/Fragement';*/
//import Table from './components/Table';
import ParentComp from "./components/ParentComp";
import RefsDemo from "./components/RefsDemo";
import FocusEx from "./components/FocusEx";
import FRparent from "./components/FRparent";
import PortalDemo from "./components/PortalDemo";


class App extends Component{
  render(){
    return(
        <div className='App'>
            <PortalDemo/>
            {/*<FRparent/>*/}
            {/*<FocusEx/>*/}
            {/*<RefsDemo/>*/}
            {/*<ParentComp/>*/}
            {/*<Fragment/>*/}
            {/*<Table/>*/}
            {/*<LifecycleA/>*/}
            {/*<Form/>*/}
            {/*<StyleSheet primary={false}/>*/}
            {/*<NameList/>*/}
            {/*<ParentComponent/>*/}
            {/*<FunctionClick/>*/}
            {/*<ClassClick/>*/}
            {/*<EventBind/>*/}
            {/*<Counter/>*/}
            {/*<UiPage/>*/}
            {/*<Message/>*/}

          {/*<Greet name={'visvas'} heroName={'batman'} >
            <p>This is visvas and his heroname is batman</p>
          </Greet>
          <Greet name={'daya'} heroName={'superman'}>
            <button>Action</button>
          </Greet>
          <Greet name={'world'} heroName={'wonderman'}/>
          <Welcome name={'world'} heroName={'wonderman'} />
          <Welcome name={'visvas'} heroName={'batman'} />*/}
          {/*<Hello/>*/}
        </div>
    )
  }
}
export default App;
