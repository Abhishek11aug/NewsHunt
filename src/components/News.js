import React, { Component } from 'react'
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
export default class News extends Component {
  static propTypes = {
    category:PropTypes.string
 };

 static defaultProps = {
    category:'general'
 };
  constructor(){
    super()
    this.state = {
      articles: [],
      page:1,
      totalPage:1,
      loading : true
    }
  }
  
  async componentDidMount() {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c59fcb8f4c604f6ebafcc2972c2af264&pageSize=12`;
    console.log(url);
    let data = await fetch(url)
    let p_data = await data.json();
      this.setState({
      articles : p_data.articles,
      totalPage : Math.ceil(p_data.totalResults/12),
      loading:false
      });
      console.log(this.state.page);
      console.log(p_data.totalResults);
      console.log(this.state.totalPage);
      console.log(this.state.articles);
    }
  
  changeToNextPage = async () => {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c59fcb8f4c604f6ebafcc2972c2af264&page=${this.state.page+1}&pageSize=12`;
    let data = await fetch(url);
    let p_data = await data.json()
    this.setState({
        page: this.state.page + 1,
        articles: p_data.articles,
        loading:false
    })
    console.log(this.state.page);
    console.log(this.state.totalPage);
    console.log(this.state.articles);
}

  changeToPrevPage = async () => {
    this.setState({
      loading:true
    })
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c59fcb8f4c604f6ebafcc2972c2af264&page=${this.state.page-1}&pageSize=12`;
    let data = await fetch(url);
    let p_data = await data.json()
    this.setState({
        page: this.state.page - 1,
        articles: p_data.articles,
        loading:false
    })
    console.log(this.state.page);
    console.log(this.state.totalPage);
    console.log(this.state.articles);
}
  
  render() {

    return (
        <>
        <div>
          <h1 className='text-center text-underline'><u>Top Headlines</u></h1>
          <div className={`d-${this.state.loading ? "block":"none"}`}>
            <Spinner></Spinner>
          </div>
          <div className={`${this.state.loading ? "d-none":"row my-4"}`}>
            {this.state.articles.map((element)=>{
              return <div className='col-md-4 my-3'><NewsItem key = {element.url} title = {element.title} img_src={element.urlToImage?element.urlToImage:"./imageErr.jpg"} desc={element.description} src_link={element.url} /></div>
            })}
          </div>
        </div>

        <div className="d-block btn-group text-center" role="group" aria-label="Basic mixed styles example">
          <button type="button" disabled={this.state.page<=1} className="btn btn-danger fs-3" onClick={this.changeToPrevPage}>PREVIOUS</button>
          <button type="button" disabled={this.state.page === this.state.totalPage} className="btn btn-success fs-3" onClick={this.changeToNextPage}>NEXT</button>
        </div>
        </>
    )
  }
}
