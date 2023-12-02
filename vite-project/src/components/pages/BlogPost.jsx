import React from 'react';

const BlogPost = () => {
  return (
   
    <div className="row">
      <div className="col-md-4 mb-4">
      <h1>Blog Post</h1>
        <div className="card">
          <img src="https://thedecorpalette.com/wp-content/uploads/2023/11/air-fryer.png.webp" className="card-img-top" alt="Air Fryer" />
          <div className="card-body">
            <h5 className="card-title">#1 Upgrade Your Cooking with an Air Fryer</h5>
            <p className="card-text">
              This Cyber Monday, give your kitchen a chance to transform with incredible air fryers...
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src="https://thedecorpalette.com/wp-content/uploads/2023/11/microwave.png.webp" className="card-img-top" alt="Microwave" />
          <div className="card-body">
            <h5 className="card-title">#2 Cyber Monday’s Hottest Microwave Deal</h5>
            <p className="card-text">
              This Cyber Monday, the kitchen is the place to be as you can grab fantastic microwave deals...
            </p>
          </div>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="card">
          <img src="https://thedecorpalette.com/wp-content/uploads/2023/11/grinder.png.webp" className="card-img-top" alt="Grinder" />
          <div className="card-body">
            <h5 className="card-title">#3 Best Deals on Grinders for the Kitchen</h5>
            <p className="card-text">
              Cyber Monday is here, and if you’re a culinary enthusiast, it’s the perfect time to explore the world of grinders...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
