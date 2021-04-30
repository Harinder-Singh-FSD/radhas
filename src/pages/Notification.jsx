import React from "react";

export const Notification = () => {
  return (
    <div class="alert alert-warning alert-dismissible fade show" role="alert">
      Due to Covid-19, we are currently offering online Group and Private 1-on-1
      cooking courses via Zoom. Once the lockdown is lifted and it is safe to
      arranged in our state-of-the-class kitchen located in Stanmore, UK. Please
      call us @ <a href="+44-07308-648019">+44 07308 648019 </a>for any
      questions.
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
};
