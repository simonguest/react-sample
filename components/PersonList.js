var PersonList = React.createClass({
  render: function () {
    if (this.props.people.length > 0){
      var people = this.props.people.map(function(person){
        return <PersonPanel key={person.email} name={person.name} email={person.email} avatar={person.avatar}/>
      });
    }
    return (
      <div>
      {people}
      </div>
    );
  }
});