var PersonPanelContainer = React.createClass({
  handleFilterUpdate: function(filterValue) {
    this.setState({nameFilter:filterValue});
  },
  getInitialState: function () {
    var people = [];
    for (var f=1; f<=5; f++){
      people.push({
        name: faker.name.findName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar()
      });
    }
    return {
      people : people,
      nameFilter:''
    }
  },
  render: function () {
    var displayedPeople = this.state.people.filter(function(person){
      var matchName = person.name.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      var matchEmail = person.email.toLowerCase().indexOf(this.state.nameFilter.toLowerCase());
      return ((matchName !== -1) || (matchEmail !== -1));
    }.bind(this));
    return (
      <div>
        <Filter updateFilter={this.handleFilterUpdate}/>
        <PersonList people={displayedPeople}/>
      </div>
    );
  }
});