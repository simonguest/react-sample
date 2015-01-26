var PersonPanel = React.createClass({
  handleAvatarChange: function() {
    this.setState({avatar:faker.image.avatar()});
  },
  getInitialState: function() {
    return {
      name: this.props.name,
      email: this.props.email,
      avatar: this.props.avatar
    }
  },
  render: function () {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h4>{this.state.email}</h4>
        <img src={this.state.avatar}/>
        <button onClick={this.handleAvatarChange}>Change Avatar</button>
      </div>
    );
  }
});