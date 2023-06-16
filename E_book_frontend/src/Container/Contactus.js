import axios from "axios";
import { Component } from "react";
import "./myStyle.css";
import { BACKEND_URL } from ".././config";
class Conatctus extends Component {
  state = {
    email: "",
    help: "",
  };
  changeGarne = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  sendmessage = (e) => {
    const data = {
      email: this.state.email,
      help: this.state.help,
    };
    axios
      .post(BACKEND_URL + "/insert/contact", data)
      .then((response) => {
        alert(response.data.message);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="container-fluid">
        <section className="Form my-4 mx-5 pt-5 pb-5 mt-6">
          <div className="container">
            <div
              className="row no-gutters shadow"
              style={{ background: "white", borderRadius: "3px" }}
            >
              <div className="col-lg-5">
                <img
                  alt="login"
                  src="/contact2.png"
                  className="img-fluid"
                  style={{ height: "400px" }}
                />
              </div>
              <div className="col-lg-5 no gutters">
                <h2 className=" py-4 ml-5">Contact Us</h2>
                <h5 className="ml-5"></h5>

                <form>
                  <div className="form-row">
                    <div className="col-lg-9 ml-5">
                      <p>
                        Email:{" "}
                        <input
                          type="email"
                          name="email"
                          value={this.state.email}
                          onChange={this.changeGarne}
                        //   placeholder="Email"
                        />{" "}
                      </p>
                    </div>
                  </div>

                  <br></br>

                  <div className="form-row">
                    <div className="col-lg-9 ml-5">
                      <p>
                        Message:{" "}
                        </p>
                        <textarea
                          type="textarea"
                          name="help"
                          value={this.state.help}
                          onChange={this.changeGarne}
                          rows="5"
                          cols="34"
                        
                        />
                        {/* <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea> */}
                     
                    </div>
                  </div>

                  <div className="form-row ">
                    <div className="col-lg-9 ml-5 mt-4">
                      <p>
                        <button
                          className="btn btn-primary "
                          onClick={this.sendmessage}
                        >
                          Submit
                        </button>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <h3 className="text-center">Google map of E-book</h3>
        <div class="mapouter1 mt-4 mb-4">
          <div class="gmap_canvas1">
            <iframe
       width="100%" height="380" frameborder="0"  allowfullscreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.9205428416944!2d85.35806101506166!3d27.688850582799606!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a23ff53c6c1%3A0xbf154d5bf0abe0ba!2sPepsicola!5e0!3m2!1sen!2snp!4v1658914845908!5m2!1sen!2snp"
            ></iframe>
            {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22864.11283411948!2d-73.96468908098944!3d40.630720240038435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew+York%2C+NY%2C+USA!5e0!3m2!1sen!2sbg!4v1540447494452" width="100%" height="380" frameborder="0" style="border:0" allowfullscreen></iframe> */}
            
          </div>
        </div>
      </div>
    );
  }
}

export default Conatctus;
