import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Import required styles

export default function App() {
  const [rating, setRating] = useState(3);
  const [isReadOnly, setIsReadOnly] = useState(false);

  async function handleAsyncSubmission(selectedValue) {
    try {
      setIsReadOnly(true); // Disable rating selection while submitting
      setRating(selectedValue);
      await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulating async submission
      console.log("Successfully submitted rating:", selectedValue);
    } catch (err) {
      console.error("Error submitting rating:", err);
      setIsReadOnly(false);
      setRating(0);
    }
  }

  return (
    <div>
      <h2>Rate Your Experience</h2>
      <Rating
        style={{ maxWidth: 180 }}
        readOnly={isReadOnly}
        value={rating}
        onChange={handleAsyncSubmission}
      />
      <p>Your Rating: {rating} stars</p>
    </div>
  );
}
