import React from "react";
import Layout from "../../Components/Layout";
import "./HomePage.css";

const HomePage = (props) => {
  return (
    <Layout>
      <section className="container-fluid main_container">
        <div className="row">
          <div className="col-md-4 listOfUsers shadow">
            <div className="displayName">
              <h2>Messages</h2>
              <div className="displayPic">
                <img
                  src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
                  alt=""
                />
                <span style={{ fontWeight: 500 }}>Gregory Papastopolus the third</span>
                <span style={{ marginLeft: '30px', color:"green" }}>Online</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 chatArea">
            <div className="chatHeader shadow text-center">Kyle XY</div>
            <div className="messageSections">
              <div style={{ textAlign: "left" }}>
                <p className="messageStyle">Hello User</p>
              </div>
            </div>

            <div className="chatControls">
              <textarea placeholder="type your message"/>
              <i className="fas fa-paper-plane text-center icon_button"></i>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    // <section className="container">
    //   <div className="listOfUsers">
    //     <div className="displayName">
    //       <div className="displayPic">
    //         <img
    //           src="https://i.pinimg.com/originals/be/ac/96/beac96b8e13d2198fd4bb1d5ef56cdcf.jpg"
    //           alt=""
    //         />
    //       </div>
    //       <div style={{ margin: "0 10px" }}>
    //         <span style={{ fontWeight: 500 }}>Rizwan Khan</span>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="chatArea">
    //     <div className="chatHeader"> Rizwan Khan </div>
    //     <div className="messageSections">
    //       <div style={{ textAlign: "left" }}>
    //         <p className="messageStyle">Hello User</p>
    //       </div>
    //     </div>
    //     <div className="chatControls">
    //       <textarea />
    //       <button>Send</button>
    //     </div>
    //   </div>
    // </section>
  );
};

export default HomePage;
