import React from "react";


function LoseModal(props) {
  var show;
  if (props.lose_showing === true) {
    show = { display: "block" };
  } else {
    show = { display: "none" };
  }
  return (
    <div style={show} className="modal lose_modal fade show" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">U haz lost!</h5>
            <button type="button" className="close" data-dismiss="modal" 
            onClick={props.close} aria-label="Close">CLOSE</button>
          </div>
          <div className="modal-body">
            <img src="/titan_displeased.jpg" alt="displeased cat"></img>
            <p>Titan is disappointed by your lack of skill! Try again!</p>
          </div>
        </div>
      </div>
    </div>
  );

}


export default LoseModal;