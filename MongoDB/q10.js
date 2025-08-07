db.Students.updateOne(
    { name: "Alice" },
    { $set: { grade: "9th" } }
);
