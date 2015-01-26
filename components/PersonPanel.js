var PersonPanel = React.createClass({
  render: function () {
    var content;
    if (this.props.people.length > 0){
      var people = this.props.people.map(function(person){
        return <div key={person.email}>
          <h1>{person.name}</h1>
          <h4>{person.email}</h4>
          <img src={person.avatar}/>
        </div>;
      });
      content = people;
    }
    return (
      <div>
      {content}
      </div>
    );
  }
});