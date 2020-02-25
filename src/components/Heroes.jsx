import React, { Component} from "react";
import axios from "axios";
import Hero from "./Hero";

//duplicating heros component
class Heroes extends Component{
    state = {
        allHeros : [
            //{id: 1, likeCount: 2, heroName:"A"},
           // {id: 2, likeCount: 4, heroName:"B"},
           // {id: 3, likeCount: 9, heroName:"C"}
        ]
    };
    render() {
return (
<div className="container">
    <div className="row">
  {this.state.allHeros.map(h => (
  <div key={h.id} className="col">
            <Hero hero={h}/>
        </div>
   
      ))}

</div>
</div>);
    }
//
  async componentDidMount(){
        const {data} = await axios.get("http://localhost:5000/api/heroes");
        console.log(data);
        let heroes = data.map(hero => {
           return{
             id: hero._id, 
             name: hero.name, 
             imgUrl: hero.imgUrl, 
             likeCount: hero.likeCount, 
             movies: hero.movies};

        });
this.setState({ allHeros: heroes });

    }
}

export default Heroes;