import { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css"; // Import required styles
import { useUser } from "@clerk/clerk-react";
import { toast } from "sonner";  // Correct import for Sonner

export default function RatingComponent() {
  const { user } = useUser();  // Get the username from Clerk
  const [rating, setRating] = useState(3);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);  // To toggle edit mode

  // Handle the async submission of the rating
  async function handleAsyncSubmission(selectedValue) {
    try {
      setIsReadOnly(true); // Disable rating selection while submitting
      setRating(selectedValue);

      // Simulate async submission (replace this with an actual API call to save rating)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Show success notification with the user's name
      toast.success(`${user?.fullName || user?.username}, your rating has been submitted successfully!`);

      await fetch('/submit-rating', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ rating: selectedValue, userName: user?.fullName }),
      });

      console.log("Successfully submitted rating:", selectedValue);
    } catch (err) {
      console.error("Error submitting rating:", err);
      setIsReadOnly(false);
      setRating(0);
    }
  }

  // Toggle edit mode to re-enable rating
  const handleEditRating = () => {
    setIsEditMode(true); // Enable the rating edit mode
    setIsReadOnly(false); // Allow the user to change their rating
  };

  // Update the state to show the "Edit" button only after submission
  const showEditButton = isReadOnly && !isEditMode;

  return (
    <div>
      <h2>Rate Your Experience</h2>
      <Rating
        style={{ maxWidth: 180 }}
        readOnly={isReadOnly}  // Disable or enable rating based on the state
        value={rating}
        onChange={handleAsyncSubmission}
      />
      <p>Your Rating: {rating} stars</p>

      {/* Show edit button after submission */}
      {showEditButton && (
        <button
          onClick={handleEditRating}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        >
          Edit Rating
        </button>
      )}
    </div>
  );
}
