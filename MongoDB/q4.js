db.Customers.updateOne(
    { name: "John Doe" },
    { $set: { address: "456 New St" } }
);
