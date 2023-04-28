import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/Theme";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchGalery } from "services/api";
import { ImageGalery } from "./ImageGallery/ImageGallery";

// 1. Необхідно відредагувати стилі
// 2. Наступний крок кнопка "загрузити більше"
export class App extends Component {
  state = {
    photos: null,
  }

  searchByrequest = async query => {
    try {

      const response = await fetchGalery(query);
      this.setState({photos: response.data.hits});
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const { photos } = this.state;
    return (
    <ThemeProvider theme={theme}>
      <Layout>
      <GlobalStyle />
          <Searchbar query={this.searchByrequest} />
          {photos && <ImageGalery items={photos} />}
      </Layout>
    </ThemeProvider>
  );
  };
};
