import React from 'react';
import ReactDOM from 'react-dom';
import github from './github.png';
import './index.css';

var marked = require('marked');


class Footer extends React.Component {
    
  
    render() {
      return (
        <div className="footer">
            <h3>Created with <a href="https://code.visualstudio.com">VS</a> by <a href="https://github.com/himanshuc3">Himanshu</a> for <a href="https://www.freecodecamp.org/himanshuc3">Freecodecamp</a></h3>
        </div>
      );
    }
  }

class Workspace extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      input:'',
    };
    this.rawmark = this.rawmark.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.exampleInput = this.exampleInput.bind(this);
  }

  exampleInput(){
    this.setState({input: '# Markdown previewer\n\nIn this simple Markdown previewer you can easily preview your *Markdown* as you  ~~write~~ **type**.\n\nFeatures:\n* instant preview\n* simple interface\n\n**Bonus tip:** Click on the light bulb to toggle between day and night version.\n\n'});
  }

  handleInputChange(e){
    this.setState({
      input: e.target.value
    });
  }

  rawmark(){
    return { __html: marked(this.state.input,{
      sanitize: true
    })};
  }


    render() {
      let style1, style2;
      if(this.props.theme==='theme1'){
          style1 = {
            backgroundColor: 'white',
            fontFamily: 'Encode Sans Expanded',
            fontSize: '30px',
            opacity: 0.5
          };
          style2 = {
            backgroundColor: 'black',
            color: 'white',
            fontFamily: 'Encode Sans Expanded',
            fontSize: '30px',
            opacity: 0.3
          }
      }else if(this.props.theme==='theme2'){
        style1 = {
          backgroundColor: 'green',
          opacity: 0.5
        };
        style2 = {
          backgroundColor: 'red',
          opacity: 0.5
        }
    }else if(this.props.theme==='theme3'){
      style1 = {
        backgroundColor: 'green',
        opacity: 0.5
      };
      style2 = {
        backgroundColor: 'yellow',
        opacity: 0.5
      }
  }

      return (
        <div className="workspace">
          <h1 id="ex" onClick={this.exampleInput}>EX</h1>
          <textarea ref="textarea" style={style1} value={this.state.input} autoFocus onChange={this.handleInputChange}>
          </textarea>

          <div className="markdown" style={style2}>
              <span dangerouslySetInnerHTML={this.rawmark()} />
          </div>
        </div>
      );
    }
  }



class Colors extends React.Component {
    
  constructor(props){
    super(props);
    this.handleclick = this.handleclick.bind(this);
  }

  handleclick(event){
    let e = event.target;
    let str = "" + e.id;
    console.log(str);
  }
  
    render() {
  

      return (
        <div id="colors">
          <ul>
              <li onClick={this.handleclick} id="theme1"></li>
              <li onClick={this.handleclick} id="theme2"></li>
              <li onClick={this.handleclick} id="theme3"></li>
          </ul>
        </div>
      );
    }
  }
  
  class Head extends React.Component {
    
    
    render() {
  

      return (
        <div>
          <div className="title">
            <img id="github-icon" src={github} alt="github icon" />
            <h1>Markdown</h1>
          </div>
            <Colors />
        </div>
      );
    }
  }
  
  class Markdown extends React.Component {
    
    
    render() {
      return (

        <div className="main">
          <div className="head">
            <Head theme={this.props.theme}/>
          </div>
            <Workspace theme={this.props.theme} />
            <Footer />
        </div>
      );
    }
  }
  
  // ========================================
  // Rendering the whole APP
  // ========================================
  ReactDOM.render(
    <Markdown theme="theme1" />,
    document.getElementById('root')
  );
  
  