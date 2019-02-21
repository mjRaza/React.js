import React from "react";
import usnplash from "../Api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./Images";
class App extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await usnplash.get("/search/photos", {
      params: { query: term }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "20px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
       <ImageList images={this.state.images }  />
      </div>
    );
  }
}
export default App;
