import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NewsItem from './NewsItem';
import Spinner from './Spinner';

export default class News extends Component {
  static propTypes = {
    category: PropTypes.string,
  };

  static defaultProps = {
    category: 'general',
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
      totalPage: 1,
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchNewsByCategory(this.props.category);
  }

  componentDidUpdate(prevProps) {
    if (this.props.category !== prevProps.category) {
      this.fetchNewsByCategory(this.props.category);
    }
  }

  fetchNewsByCategory = async (category) => {
    this.setState({
      loading: true,
    });

    const apiKey = 'c59fcb8f4c604f6ebafcc2972c2af264';
    const pageSize = 12;
    const url = `https://newsapi.org/v2/everything?q=${category}&apiKey=${apiKey}&pageSize=${pageSize}`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        articles: data.articles,
        totalPage: Math.ceil(data.totalResults / pageSize),
        loading: false,
        page: 1,
      });
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({
        articles: [],
        totalPage: 1,
        loading: false,
        page: 1,
      });
    }
  };

  changePage = async (pageDelta) => {
    this.setState({
      loading: true,
    });

    const nextPage = this.state.page + pageDelta;
    const url = `https://newsapi.org/v2/everything?q=${this.props.category}&apiKey=c59fcb8f4c604f6ebafcc2972c2af264&page=${nextPage}&pageSize=12`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({
        page: nextPage,
        articles: data.articles,
        loading: false,
      });
    } catch (error) {
      console.error('Error fetching news:', error);
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    return (
      <>
        <div>
          <h1 className='text-center text-underline'>
            <u>Top Headlines</u>
          </h1>
          <div className={`d-${this.state.loading ? 'block' : 'none'}`}>
            <Spinner />
          </div>
          <div className={`${this.state.loading ? 'd-none' : 'row my-4'}`}>
            {this.state.articles.map((element) => (
              <div className='col-md-4 my-3' key={element.url}>
                <NewsItem
                  title={element.title}
                  img_src={element.urlToImage || './imageErr.jpg'}
                  desc={element.description}
                  src_link={element.url}
                />
              </div>
            ))}
          </div>
        </div>

        <div className='d-block btn-group text-center' role='group' aria-label='Basic mixed styles example'>
          <button
            type='button'
            disabled={this.state.page <= 1}
            className='btn btn-danger fs-3'
            onClick={() => this.changePage(-1)}
          >
            PREVIOUS
          </button>
          <button
            type='button'
            disabled={this.state.page === this.state.totalPage}
            className='btn btn-success fs-3'
            onClick={() => this.changePage(1)}
          >
            NEXT
          </button>
        </div>
      </>
    );
  }
}
