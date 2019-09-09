import React from "react";

function LoseModal(props) {
  return (
    <div class="modal" tabindex="-1" role="dialog">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">U haz lost!</h5>
          </div>
          <div class="modal-body">
          <img src="/titan_displeased" alt="displeased cat"></img>
            <p>Titan is shocked by your lack of skill! Try again!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoseModal;