import { NextRequest, NextResponse } from "next/server";
import { addDoc, collection } from "firebase/firestore";
import { db } from "@/tools/firebase";

export async function POST(request: NextRequest) {
  const { userId, type, note, date } = await request.json();

  if (!userId || !type || !date)
    return NextResponse.json(
      { error: "Missing required parameters" },
      { status: 500 }
    );

  try {
    await addDoc(collection(db, "moods"), {
      userId,
      type,
      note: note || "",
      date,
    });
  } catch (e) {
    console.error("Error adding mood: ", e);
  }
  console.log("Added mood");

  return NextResponse.json({ status: 200 });
}
