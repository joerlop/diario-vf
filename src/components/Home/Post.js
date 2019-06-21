import React from "react";
import Feelings from "./Feelings";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle(e) {
    e.preventDefault();
    const prevHeight = this.state.height || 0;
    this.setState(
      {
        open: !this.state.open,
        height: this.refs.inner.clientHeight
      },
      () => {
        this.state.open
          ? this.props.updateHeightYear(this.state.height)
          : this.props.updateHeightYear(-prevHeight);
      }
    );
  }

  render() {
    const { open, height } = this.state;
    const currentHeight = open ? height : 0;

    return (
      <div className="Post">
        <div className="title-section" onClick={e => this.handleToggle(e)}>
          <div className="title">{this.props.post.title}</div>
          <div className="characteristics">
            <div className="feelings-container">
              <Feelings feelings={this.props.post.feelings} />
            </div>
            <div className="day">
              <p>{this.props.post.day}</p>
            </div>
          </div>
        </div>
        <div className="Content" style={{ height: currentHeight + "px" }}>
          <div
            className={`Content-inner`}
            ref="inner"
            dangerouslySetInnerHTML={{ __html: this.props.post.data }}
          />
        </div>
      </div>
    );
  }
}

export default Post;
