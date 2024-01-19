import React from "react";

function Header({ value, isCreateTrainingPage, action, isAdmin }) {
  return (
    <header class="headerUser">
      <div class="headerLeft">
        <img
          class="headerLogo"
          src={require("../images/logosmallLogo_transparent.png")}
          alt="smallLogo"
        />
        <h1>Trainings</h1>
      </div>
      <div class="headerRight">
        <form action={action}>
          {isAdmin && (
            <button class="orangeButton" type="submit">
              {value}
            </button>
          )}
          {isCreateTrainingPage && (
            <button class="orangeButton" type="submit">
              {value}
            </button>
          )}
        </form>
        <form action="/">
          {!isCreateTrainingPage && <button class="logout">Logout</button>}
        </form>
      </div>
    </header>
  );
}

export default Header;
