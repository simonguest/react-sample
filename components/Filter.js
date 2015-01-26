var Filter = React.createClass({
  handleFilterChange: function(event) {
    this.props.updateFilter(event.target.value);
  },
  render: function () {
    return (
      <div>
      <input type="text" placeholder="Search People" onChange={this.handleFilterChange}/>
      </div>
    );
  }
});