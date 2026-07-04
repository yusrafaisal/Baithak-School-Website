// import dns from 'node:dns';
// dns.setServers(['8.8.8.8', '8.8.4.4']);

// import clientPromise from "../lib/mongodb";

// interface Donation {
//     id: number;
//     donorName: string;
//     amount: number;
//     currency: string; // "PKR" | "USD" | "GBP"
//     type: string; // "Zakat" | "Sadaqah" | "General" | "Sponsor a School"
//     date: string; // ISO Format string "YYYY-MM-DD"
//     message: string;
//     isAnonymous: boolean;
//     school: string;
// }

// const donations: Donation[] = [
//     {
//         id: 1,
//         donorName: "Ayesha Malik",
//         amount: 25000,
//         currency: "PKR",
//         type: "Zakat",
//         date: "2025-04-12",
//         message: "May this help a child stay in school.",
//         isAnonymous: false,
//         school: "Karachi Campus",
//     },
//     {
//         id: 2,
//         donorName: "Anonymous",
//         amount: 10000,
//         currency: "PKR",
//         type: "Sadaqah",
//         date: "2025-06-01",
//         message: "",
//         isAnonymous: true,
//         school: "General Fund",
//     },
//     {
//         id: 3,
//         donorName: "Bilal Ahmed",
//         amount: 150,
//         currency: "USD",
//         type: "Sponsor a School",
//         date: "2025-08-20",
//         message: "Proud to sponsor a classroom this year.",
//         isAnonymous: false,
//         school: "Lahore Campus",
//     },
//     {
//         id: 4,
//         donorName: "Anonymous",
//         amount: 50000,
//         currency: "PKR",
//         type: "Zakat",
//         date: "2025-11-15",
//         message: "For the children of Baithak.",
//         isAnonymous: true,
//         school: "Karachi Campus",
//     },
//     {
//         id: 5,
//         donorName: "Sana Tariq",
//         amount: 75,
//         currency: "GBP",
//         type: "General",
//         date: "2025-12-24",
//         message: "Happy to give back this winter.",
//         isAnonymous: false,
//         school: "General Fund",
//     },
//     {
//         id: 6,
//         donorName: "Omar Farooq",
//         amount: 30000,
//         currency: "PKR",
//         type: "Sadaqah",
//         date: "2026-01-10",
//         message: "",
//         isAnonymous: false,
//         school: "Lahore Campus",
//     },
//     {
//         id: 7,
//         donorName: "Anonymous",
//         amount: 200,
//         currency: "USD",
//         type: "Sponsor a School",
//         date: "2026-02-18",
//         message: "Wishing the students the best this term.",
//         isAnonymous: true,
//         school: "Karachi Campus",
//     },
//     {
//         id: 8,
//         donorName: "Zainab Hussain",
//         amount: 40000,
//         currency: "PKR",
//         type: "General",
//         date: "2026-03-05",
//         message: "Keep up the great work.",
//         isAnonymous: false,
//         school: "General Fund",
//     },
//     {
//         id: 9,
//         donorName: "Kamran Sheikh",
//         amount: 100,
//         currency: "GBP",
//         type: "Zakat",
//         date: "2026-05-22",
//         message: "",
//         isAnonymous: false,
//         school: "Lahore Campus",
//     },
//     {
//         id: 10,
//         donorName: "Hina Raza",
//         amount: 15000,
//         currency: "PKR",
//         type: "Sponsor a School",
//         date: "2026-06-30",
//         message: "Sponsoring supplies for the new term.",
//         isAnonymous: false,
//         school: "Karachi Campus",
//     },
// ];

// async function seedDonations() {
//     const client = await clientPromise;

//     try {
//         const db = client.db("baithak");
//         const collection = db.collection<Donation>("donations");

//         // Drop the collection if it already exists, so the script is idempotent
//         const existingCollections = await db
//             .listCollections({ name: "donations" })
//             .toArray();

//         if (existingCollections.length > 0) {
//             await collection.drop();
//             console.log('Dropped existing "donations" collection.');
//         }

//         const result = await collection.insertMany(donations);

//         console.log(`Successfully inserted ${result.insertedCount} donation records.`);
//     } catch (error) {
//         console.error("Error seeding donations:", error);
//         process.exitCode = 1;
//     } finally {
//         await client.close();
//         console.log("MongoDB connection closed.");
//     }
// }

// seedDonations();