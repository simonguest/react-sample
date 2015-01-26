var PersonList = React.createClass({
  render: function () {
    if (this.props.people.length > 0){
      var people = this.props.people.map(function(person){
        return <PersonPanel key={person.email} name={person.name} email={person.email} avatar={person.avatar}/>
      });
    }
    if (!people) return <h1>No matching people found</h1>;
    return (
      <div>
      {people}
      </div>
    );
  }
});