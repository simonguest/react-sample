var Filter = React.createClass({
  handleFilterChange: function() {
    var value = this.refs.filterInput.getDOMNode().value;
    this.props.updateFilter(value);
  },
  render: function () {
    return (
      <div>
      <input type="text" placeholder="Search People" ref="filterInput" onChange={this.handleFilterChange}/>
      </div>
    );
  }
});