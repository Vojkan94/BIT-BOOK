import React from "react";

import dateFormat from "./../../../shared/dateFormat";

import "./UserItem.css";

const UserItem = ({ user }) => {
  return (
    <div className="row user-item p-2 m-2">
      <div className="col-12">
        <div className="row">
          <div className="text-center col-12 col-md-3">
            <img src={user.img} alt="profile" />
          </div>
          <div className="col-12 col-md-9">
            <h4>{user.name}</h4>
            <p>{user.about}</p>
          </div>
          <div className="col-12 ">
            <span className="badge badge-pill badge-primary float-right">
              {dateFormat(user.lastPostDate)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UserItem;
