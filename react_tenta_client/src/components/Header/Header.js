import React from "react";
import "./Header.css";
import Logo from "../../assets/logo.jpg";
import { Button } from "@material-ui/core";
import { TextField } from "@material-ui/core";
// import { useHistory } from "react-router-dom";

export default function Header(props) {
  // let history = useHistory();
  const handleSearchSubmit = (query) => {
    window.location.href =
      "/search?" + new URLSearchParams("q=" + query).toString();
    // history.push("/search?" + new URLSearchParams("q=" + query).toString());
  };
  const categories = props.categories;

  return (
    <div className="Header">
      <img className="Header-Logo" src={Logo} alt="Logo" />
      <div className="Header-Buttons">
        <Button href="/">Home</Button>
        {categories.map((category) => (
          <Button key={category.id} href={category.url}>
            {category.title}
          </Button>
        ))}
      </div>
      <TextField
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearchSubmit(event.target.value.trim());
          }
        }}
        id="search-field"
        label="Search"
        variant="outlined"
      />
    </div>
  );
}
