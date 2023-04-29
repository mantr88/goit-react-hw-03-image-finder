import { ThemeProvider } from "styled-components";
import { Component } from "react";
import { Layout } from "./Layout/Layout";
import { GlobalStyle } from "./Utils/GlobalStyle";
import { theme } from "./Utils/Theme";
import { Searchbar } from "./Searchbar/Searchbar";
import { fetchGalery } from "services/api";
import { ImageGalery } from "./ImageGallery/ImageGallery";
import { Button } from "./Button/Button";
import { Spiner } from "./Spiner/Spiner";

export class App extends Component {
  state = {
    photos: null,
    query: '',
    page: 1,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
  if (prevState.page !== this.state.page) {
    try {
       this.setState({ isLoading: true });
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
    } finally {
      this.setState({ isLoading: false });
    }
  }
    
  }

  searchByrequest = async query => {
    try {
      this.setState({ isLoading: true });
      const response = await fetchGalery(query);
      // console.log(response)
      this.setState({photos: response.data.hits, query: query});
    } catch (error) {
      console.log(error);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  loadsMore = () => {
    this.setState(prevState => ({page: prevState.page + 1}));
    console.log(`Записав номер сторінки! page =${this.state.page}`)
};

  render() {
    const { photos, isLoading } = this.state;
    return (
    <ThemeProvider theme={theme}>
      <Layout>
      <GlobalStyle />
          <Searchbar query={this.searchByrequest} />
          <Spiner visible={isLoading} />
          {photos && <ImageGalery items={photos} />}
          {photos && <Button loadsMore={this.loadsMore} />}
      </Layout>
    </ThemeProvider>
  );
  };
};
