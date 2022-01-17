import React, { useState } from "react";
import { Submit } from "../components/form/Submit";
import { TemplatePage } from "./TemplatePage";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Form from "../components/form/Form";
import { format } from "path/posix";

const addBlog = async (blogObj: { title: string; content: string }) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding docuemnt: ", e);
  }
};

const handleClick = (message: string) => {
  console.log(message);
};

const handleInputChange = (e: any, fn: any) => {
  // console.log(e);
  fn(e.target.value);
};
// [string, React.Dispatch<React.SetStateAction<string>>]
// [number | null, React.Dispatch<React.SetStateAction<number | null>>]
export const Blog = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [age, setAge] = useState<number | null>(null);

  const blogPost = {
    title: "Mario's Blog",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque, est quisquam rem perspiciatis a necessitatibus, excepturi iste accusantium similique cumque fugit delectus accusamus. Ducimus, distinctio.",
  };

  return (
    <TemplatePage>
      <div className="mx-auto py-16 max-w-xl space-y-4 text-u-off-white font-bold">
        <h1 className="text-4xl text-u-green-primary">Blogs</h1>
        <div className="space-y-3">
          <h2 className="text-2xl font-medium">{blogPost.title}</h2>
          <p className="font-normal">{blogPost.content}</p>
        </div>
        <Submit handleClick={() => handleClick("Button Clicked")}>
          Add Blog
        </Submit>
        {/* <Submit handleClick={handleClick}>Add Blog</Submit> */}
        <Form className="w-full">
          <Form.Input
            name="fName"
            type={Form.InputTypes.Input}
            placeHolder="First Name"
            handleChange={(e: any) => handleInputChange(e, setFName)}
          >
            First Name
          </Form.Input>
          <Form.Input
            name="lName"
            type={Form.InputTypes.Input}
            placeHolder="Last Name"
          >
            Last Name
          </Form.Input>
          <Form.Input
            name="age"
            type={Form.InputTypes.Number}
            placeHolder="Your Age"
          >
            Age
          </Form.Input>
        </Form>
        <div>
          <ul>
            <li>{fName}</li>
            <li>{lName}</li>
            <li>{age}</li>
          </ul>
        </div>
      </div>
    </TemplatePage>
  );
};
