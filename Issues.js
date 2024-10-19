import { db } from '../firebase';
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where } from 'firebase/firestore';

export const addIssue = async (issueData) => {
  try {
    const docRef = await addDoc(collection(db, "issues"), issueData);
    return docRef.id;
  } catch (error) {
    console.error("Error adding issue: ", error);
    throw error;
  }
};

export const getIssues = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "issues"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error("Error getting issues: ", error);
    throw error;
  }
};

export const getIssueById = async (id) => {
  try {
    const docRef = doc(db, "issues", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      throw new Error("Issue not found");
    }
  } catch (error) {
    console.error("Error getting issue: ", error);
    throw error;
  }
};

export const updateIssue = async (id, updateData) => {
  try {
    const docRef = doc(db, "issues", id);
    await updateDoc(docRef, updateData);
  } catch (error) {
    console.error("Error updating issue: ", error);
    throw error;
  }
};

export const deleteIssue = async (id) => {
  try {
    await deleteDoc(doc(db, "issues", id));
  } catch (error) {
    console.error("Error deleting issue: ", error);
    throw error;
  }
};

import { addIssue } from '../utils/issues';

// In your component
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const issueId = await addIssue({
      title: "New Issue",
      description: "This is a new issue",
      status: "Open",
      createdBy: user.uid, // Assuming you have the user object from authentication
      createdAt: new Date().toISOString()
    });
    console.log("New issue created with ID: ", issueId);
  } catch (error) {
    console.error("Error creating issue: ", error);
  }
};