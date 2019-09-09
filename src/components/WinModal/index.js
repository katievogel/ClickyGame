import React from "react";

function WinModal(props) {
    return (
      <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">U haz won!</h5>
          </div>
          <div class="modal-body">
          <img src="/titan_content.jpg" alt="content cat"></img>
            <p>Titan is pleased, though generally disinterested in most things. See if you can win again!</p>
          </div>
        </div>
      </div>
    </div>
    );
  }

  export default WinModal;