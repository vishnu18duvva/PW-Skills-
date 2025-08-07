db.Teachers.find({ $or: [ { subject: "Math" }, { experience: { $gt: 7 } } ] });
