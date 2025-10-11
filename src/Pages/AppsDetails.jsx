import React from "react";
import { useParams } from "react-router-dom";
import { Download, Star, MessageSquare } from "lucide-react";

// Dummy data — replace with your real data or API
const appsData = [
    {
        id,
        image,
        title,
        developer,
        downloads,
        ratingAvg,
        totalReviews,
        size,
        ratings,
        description,
    },
];

const AppsDetails = () => {
    const { id } = useParams();
    const app = appsData.find((a) => a.id === Number(id));

    if (!app) return <div className="p-10 text-center text-xl"><img src="../assets/App-Error.png" alt="" /></div>;

    return (
        
    );
};

export default AppsDetails;
