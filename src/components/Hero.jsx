import React, { Component} from "react";

class Hero extends Component{
   /* state = {
        heroId : this.props.hero.id,
        heroName: this.props.hero.name,
        movies: this.props.hero.movies,
        likeCount : this.props.likeCount,
        imgUrl: this.props.hero.imgUrl
    };*/ // we use {this.state.likeCount}
    render(){
return (
    /*
    <React.Fragment>
<h1 style={{color : "red", fontSize:"30px"}}> Hero Componets : {this.isHero()}</h1>
<h3> Hero Id is {this.state.heroId} </h3>
<button className="btn btn-outline-primary">Click me</button>
    </React.Fragment>
    */
    //inline style {{color : "red"}} firts bracket for js sec bracket for 
    <div className="card" style={{width: "18rem"}}>
  <img src={this.props.hero.imgUrl} alt="..."/>
  <div className="card-body">
<h5 className="card-title">{this.props.hero.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
    </p>
    <p>movies</p>
    <ul>
       {this.showMovies()}
    </ul>
<div style={{ textAlign: "center"}}>
<button className="btn btn-primary"  
onClick={() => this.likeAvenger(1)}>Like {" "}
<span className="badge badge-light">{this.props.hero.likeCount}</span></button></div>
  </div>
</div>
// {this.state.movies.map(movie => (<li>{movie}</li>))} in ul tag expect  {this.showMovies()}

);
    }
//arrow function
    likeAvenger = counter => {
//log("You have liked he super hero");
this.setState({likeCount : this.props.hero.likeCount + counter});
    }

showMovies(){
    if (this.props.hero.movies.length === 0) return <p>No movies availabe</p>;
        return  this.props.hero.movies.map(movie => (<li key={this.props.hero.movies.indexOf(movie)}>{movie}</li>));

}
    isHero() {
      //  if (this.state.heroId < 1000) {
         //   return "Avengers";
      //  }
       // else {
       //     return " Not an avanger";
       // }

        return (this.props.hero.heroId < 1000) ? "Avenger" : " Not an Avenger"// simplify the code above if else
    
    }
}

export default Hero;