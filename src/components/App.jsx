import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme } from "./Utils/Theme";
import { Component } from "react";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchGalery } from "services/api";
import { ImageGalery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";

// 1. Необхідно відредагувати стилі
// 2. Наступний крок кнопка "загрузити більше"
export class App extends Component {
  state = {
    photos: null,
    query: '',
    page: 1,
  };

  async componentDidUpdate(_, prevState) {
  if (prevState.page !== this.state.page) {
    try {
      const { query, page } = this.state;
      const response = await fetchGalery(query, page);
      console.log(response)
      let newPhotos = response.data.hits;
      // console.log(newPhotos)
      this.setState(prevState => {
        // console.log(pervState)
        this.state.photos = [...prevState.photos, ...newPhotos];
      });
    } catch (error) {
      console.log(error);
    }
  }
    
  }

  searchByrequest = async query => {
    try {

      const response = await fetchGalery(query);
      // console.log(response)
      this.setState({photos: response.data.hits, query: query});
    } catch (error) {
      console.log(error);
    }
  };

  loadsMore = () => {
    // try {
      const { query, page } = this.state;
    this.setState(prevState => ({page: prevState.page + 1}));
      console.log(`Записав номер сторінки! page =${page}`)
    //   const response = await fetchGalery(query, page);
    //   console.log(response)
    //   let newPhotos = response.data.hits;
    //   console.log(newPhotos)
    //   this.setState(pervState => {
    //     // console.log(pervState)
    //     this.state.photos = [...pervState.photos, ...newPhotos];
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
};

  render() {
    const { photos } = this.state;
    return (
    <ThemeProvider theme={theme}>
      <Layout>
      <GlobalStyle />
          <Searchbar query={this.searchByrequest} />
          {photos && <ImageGalery items={photos} />}
          {photos && <Button loadsMore={this.loadsMore} />}
      </Layout>
    </ThemeProvider>
  );
  };
};
