"use client";

export default function Button() {
  //test firebase
  const handleAddUser = async () => {
    try {
      await fetch("/api/mood", {
        method: "POST",
        body: JSON.stringify({
          userId: -1,
          type: "excellent",
          date: "12/2024",
          note: "",
        }),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <button className="bg-mood-happy" onClick={handleAddUser}>
      Add user
    </button>
  );
}
