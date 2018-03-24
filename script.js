import React from 'react'
import ReactDOM from 'react-dom'
// These two containers are siblings in the DOM
const appRoot = document.getElementById('app-root');
const modalRoot = document.getElementById('modal-root');

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    modalRoot.removeChild(this.el);
  }
  
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
    this.skills = '<p>(print:"ATHLETICS=")(print:$Athletics)(print:"BRAINS=")(print:$Brains)(print:"CHARM=")(print:$Charm)(print:"DURABILITY=")(print:$Durability)</p>'
    this.images = '<img src="https://static.wixstatic.com/media/caed2f_2cede54434fe4c23b4df6dce4b21282a%7Emv2.png_srz_36_36_85_22_0.50_1.20_0.00_png_srz">--> (link-goto: "Insect") <img src="https://static.wixstatic.com/media/caed2f_0c02b38633d94879acd536a30fe8d0d4%7Emv2.png_srz_36_36_85_22_0.50_1.20_0.00_png_srz">--> (link-goto: "Crustacean") <img src="https://static.wixstatic.com/media/caed2f_228debdb9c054eca970cfe644d544fb4%7Emv2.png_srz_36_36_85_22_0.50_1.20_0.00_png_srz">--> (link-goto: "Reptile") <img src="https://coffeelux.club/uploads/mutant_tent.png">--> (link-goto: "Cephalopod") <img src="https://static.wixstatic.com/media/caed2f_d2565751f1694f15b84340bb131f4056%7Emv2.png_srz_36_36_85_22_0.50_1.20_0.00_png_srz">--> (link-goto: "Bird") <img src="https://static.wixstatic.com/media/caed2f_09e5745944e447efbbe00dd6903b318e%7Emv2.png_srz_36_36_85_22_0.50_1.20_0.00_png_srz">--> (link-goto: "Bat") <img src="https://coffeelux.club/uploads/mutant_claw.png">--> (link-goto: "Werebeast") <img src="https://coffeelux.club/uploads/mutant_turtle.png">--> (link-goto: "Turtle")'
  }

  handleClick() {
    // This will fire when the button in Child is clicked,
    // updating Parent's state, even though button
    // is not direct descendant in the DOM. 
    this.setState(prevState => ({
      clicks: prevState.clicks + 1
    }));
  }

  render() {
    return (
      <div onClick={this.handleClick}>
        <p>Number of clicks: {this.state.clicks}</p>
        <p>
          Open up the browser DevTools
          to observe that the button
          is not a child of the div
          with the onClick handler.
        </p>
        <Modal>
          <div>
            <div class="wrapper">
              <article class="main">
                {this.skills}
              </article>
              <aside class="aside aside-1"> {this.images} </aside>
              <footer class="footer">Welcome Traveller! You awake in your birth creche already a young adult -- android servitors are forcing you outside, but you gaze at the mirrored surface of the chrome chambers and see a humanoid....</footer>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

function Child() {
  // The click event on this button will bubble up to parent,
  // because there is no 'onClick' attribute defined
  return (
    <div className="modal">
      <button>Click</button>
    </div>
  );
}

ReactDOM.render(<Parent />, appRoot);
