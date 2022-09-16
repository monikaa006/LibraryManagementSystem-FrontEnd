

import { useState } from "react";

import StripeCheckout from "react-stripe-checkout";

import axios from "axios";

import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  //toast.configure()
  const [book] = useState({

    id: localStorage.getItem("IssueId"),

  })

  const fine = 6
  const Id = localStorage.getItem("IssueId")
  const token = JSON.parse(localStorage.getItem('token'));
  async function handleToken() {
    const response = await axios.post(
      `https://64bc-122-168-72-226.in.ngrok.io/issuedbooks/pay_fine/${Id}`,
      { book }, {
      headers: {
        "Authorization": `${token}`,
        "ngrok-skip-browser-warning": "*"
      }
    }
    );
    console.log(response.status)

    if (response.status === 200) {

      toast("Success! Check email for details", { type: "success" });
      navigate("/userIssuebook")
    } else {
      toast("Something went wrong", { type: "error" });
    }
  }

  return (
    <div className="App">
      <div className="container">
        <br />
        <h3>Pay fine here</h3>
        <h5>your Fine is {fine}</h5>

        <div className="form-group container">
          <StripeCheckout
            className="center"
            stripeKey="pk_test_51LfHtASE5lZ2NTIeWhramxuQ6D4BJfHr5DyXMjgpSqE5jC30ZgzvNu5sQXBhurH52FfkqJ05cATl2MAYQSPig4z000kbPUicRH"
            token={handleToken}
            amount={fine * 100}
            name="user"
            billingAddress
            shippingAddress
          />
        </div>
      </div>
    </div>
  );
}

export default App;