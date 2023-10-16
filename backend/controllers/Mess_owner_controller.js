import client from "../db.js";

export const View_mess_users = async (req, res) => {

    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("select Users.fname,Users.lname,Users.phone_num,Users.email,Users.user_address,Subscription.daily_tokens from subscription inner join Users on Users.User_id = Subscription.customer_id where subscription.Mess_id=$1",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };


  export const fetch_total_tokens = async (req, res) => {

    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("select sum(daily_tokens) from subscription where Mess_id=$1",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };

  export const Deduct_tokens = async (req, res) => {

    const {Mess_id} = req.body;
    let exists;
    try {
      exists = await client.query("UPDATE subscription SET remaining_token = remaining_token-daily_tokens WHERE mess_id=$1;",
      [Mess_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows);
  };

  export const Mess_registration = async (req, res) => {
    const { Messname, Messaddress, Messcontact,Fooddetails,Monthlyprice, mess_owner_id} = req.body;
      let newMess;
      try {
        newMess = await client.query(
          "INSERT INTO Mess(mess_name,mess_address,phone_num,tiffin_details, subscription_price,mess_owner_id) VALUES ($1,$2,$3,$4,$5,$6);",
          [Messname, Messaddress, Messcontact, Fooddetails, Monthlyprice, mess_owner_id]
        );
        res.status(200).send("Mess has been Registered");
      } catch (err) {
        console.log(err);
      }
    
  };

  export const fetch_mess_id = async (req, res) => {

    const {User_id} = req.body;
    let exists;
    try {
      exists = await client.query("select mess_id from Mess where mess_owner_id = $1",
      [User_id]);
    } catch (err) {
      console.log(err);
    }
    console.log(exists.rows);
    res.status(200).send(exists.rows[0]);
  };
