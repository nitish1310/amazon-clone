import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Orders.css";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users") //accessing users DB
        .doc(user?.uid) //Getting specific user logged in
        .collection("orders") //Accessing that users order
        .orderBy("created", "desc") // orders in db orders arrange desc
        .onSnapshot((snapshot) => {
          //Realtime snapshot of Database
          setOrders(
            //Going to all orders
            snapshot.docs.map((doc) => ({
              id: doc.id, // set order id
              data: doc.data(), //Set all order data
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]);
  return (
    <div className="orders">
      <h1>Your Orders</h1>

      <div className="orders__order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
