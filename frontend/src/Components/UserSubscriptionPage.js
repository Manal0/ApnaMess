import React, { useState, useEffect } from "react";
import MessHeading from './MessHeading'
import ItemCard2 from "./ItemCard2";
import Footer from "./Footer";
import axios from "axios";
import Cookies from "universal-cookie";

function UserSubscriptionPage() {

      const cookies = new Cookies();
      const [subscribed_mess, set_subscribed_mess] = useState([]);

        const fetch = async (e) => {

          const User_id = cookies.get("User").User_id;
          await axios
            .post("https://apna-mess-server.onrender.com/Customer/View_subscribed_mess/",
            {
              "customer_id": User_id
            })
            .then((res) => {
              set_subscribed_mess(res.data);
            });
            console.log(subscribed_mess);
        };
      
        useEffect(() => {
          fetch();
          console.log("call")
        },[]);

  return (
    <div className="bg-cyan-600">
      <MessHeading />
      <section className="my-3 max-w-screen-xl mx-auto px-6">
            <div className="flex items-center justify-center space-x-6">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
                {subscribed_mess.map(ele => (
                    <ItemCard2
                    
                    image={"https://pluspng.com/img-png/veg-thali-png-exotic-tastes-of-india-from-thali-to-tandoori-484.png"}
                    name={ele.mess_name}
                    rating={5}
                    daily_tokens={ele.daily_tokens}
                    status={ele.status}
                    remaining_token={ele.remaining_token}
                    mess_id={ele.mess_id}
                    validity={ele.subscription_validity}
                    />
                ))}
            </div>
        </section>
      <Footer />
    </div>
  )
}

export default UserSubscriptionPage
