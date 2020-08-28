import React, {Component, PropTypes} from 'react';
import RichTextEditor from 'react-rte';
import "../assets/CSS/other.css"

export default class Richtext extends Component {
  
    constructor(props){
            super(props)
   
        
          this.state = {
            value: RichTextEditor.createEmptyValue()
          }
    }
    

  onChange = (value) => {
    this.setState({value});
    if (this.props.onChange) {
      // Send the changes up to the parent component as an HTML string.
      // This is here to demonstrate using `.toString()` but in a real app it
      // would be better to avoid generating a string on each change.
    
      this.props.onChange(
        value.toString('html')
      );
    }
    console.log(value)
  };



  render () {
    const toolbarConfig = {
        // Optionally specify the groups to display (displayed in the order listed).
        display: ['INLINE_STYLE_BUTTONS', 'BLOCK_TYPE_BUTTONS', 'LINK_BUTTONS', 'BLOCK_TYPE_DROPDOWN', 'HISTORY_BUTTONS'],
        INLINE_STYLE_BUTTONS: [
          {label: 'Bold', style: 'BOLD', className: 'custom-css-class'},
          {label: 'Italic', style: 'ITALIC'},
          {label: 'Underline', style: 'UNDERLINE'}
        ],
       
        BLOCK_TYPE_BUTTONS: [
          {label: 'UL', style: 'unordered-list-item'},
          {label: 'OL', style: 'ordered-list-item'}
        ]
      };

     
      
      
 

    return (

      <div className="Richtext">
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
        toolbarConfig={toolbarConfig}
        placeholder="Job Description: Nature of your Job in detail"
     
        {...this.props}
        
      />
      </div>

     
    );
  }
}