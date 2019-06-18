import React from "react";
import Post from "./Post";

class Month extends React.Component {
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
        console.log(prevHeight);
        this.state.open ?
        this.props.updateHeightYear(this.state.height) : this.props.updateHeightYear(-prevHeight);
      }
    );
  }

  render() {
    const { open, height } = this.state;
    const currentHeight = open ? height : 0;

    return (
      <div className={`Month Month-${this.state.open}`}>
        <div className="Title" onClick={e => this.handleToggle(e)}>
          <h3>{this.props.month}</h3>
        </div>
        <div className={`PostList`} style={{ height: currentHeight + "px" }}>
          <div className="Post-Container" ref="inner">
            {this.props.posts.map(post => {
              if (
                post.year === this.props.year &&
                post.month === this.props.month
              ) {
                return <Post post={post} />;
              }
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Month;
