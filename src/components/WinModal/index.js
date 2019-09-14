import React from "react";


function WinModal(props) {
  var show;
  if (props.win_showing === true) {
    show = { display: "block" };
  } else {
    show = { display: "none" };
  }
  return (
    <div style={show} className="modal win_modal fade show" tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">U haz won!</h5>
            <button type="button" className="close" data-dismiss="modal" onClick={props.close}aria-label="Close">CLOSE</button>
          </div>
          <div className="modal-body">
            <img src={process.env.PUBLIC_URL + "/titan_content.jpg"} alt="content cat"></img>
            <p>Titan is pleased, though generally disinterested in most things. See if you can win again!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WinModal;