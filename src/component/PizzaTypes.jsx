import React, { Component } from 'react';

class PizzaTypes extends Component {

    render() { 
        return (
            
<div class="container ">
  <div class="row">
    <h3 class="text-center">PIZZA {this.props.title}</h3>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="images/IMG-20220304-WA0077.jpg"alt="..."/>
        <div class="caption">
          <h3>MUSHROOM PIZZA</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Id laudantium accusamus deserunt voluptatum odio, reprehenderit quidem sint tenetur architecto,
              cum doloremque, eius 
            asperiores saepe numquam consectetur ullam maiores iste animi?</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="images/IMG-20220304-WA0078.jpg" alt="..."/>
        <div class="caption">
          <h3>CHICKEN PIZZA</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Id laudantium accusamus deserunt voluptatum odio, reprehenderit quidem sint tenetur architecto,
              cum doloremque, eius 
            asperiores saepe numquam consectetur ullam maiores iste animi?</p>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <div class="thumbnail">
        <img src="images/IMG-20220304-WA0080.jpg" alt="..."/>
        <div class="caption">
          <h3>PEPPERONI PIZZA</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Id laudantium accusamus deserunt voluptatum odio, reprehenderit quidem sint tenetur architecto,
              cum doloremque, eius 
            asperiores saepe numquam consectetur ullam maiores iste animi?</p>
        </div>
      </div>
    </div>
    <div class="col-md-3"><div class="thumbnail">
      <img src="images/IMG-20220304-WA0076.jpg" alt="..."/>
      <div class="caption">
        <h3>CHEESE PIZZA</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Id laudantium accusamus deserunt voluptatum odio, reprehenderit quidem sint tenetur architecto,
            cum doloremque, eius 
          asperiores saepe numquam consectetur ullam maiores iste animi?</p>
      </div>
    </div></div>
  </div>
</div>

        );
    }
}
 
export default PizzaTypes;