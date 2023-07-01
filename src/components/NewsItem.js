import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {title,img_src,desc,src_link} = this.props;
    return (
        <div className="card border border-dark border-4 w-75 m-auto">
            <img src={img_src} className="card-img-top" alt="Not Found" />
            <div className="card-body border-top border-black border-2">
                <h5 className="card-text fs-4">Title <span className='fs-6'>{title}</span></h5>
                <p className="card-text fs-4">Description <span className='fs-6'>{desc}</span></p>
                <div className='text-end'><a href={src_link} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary fs-6">Read Full Article</a></div>
            </div>
        </div>
    )
  }
}
