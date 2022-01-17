import React from "react";
import { TemplatePage } from "./TemplatePage";
import Form from "../components/form/Form";

export const Contact = () => {
  return (
    <TemplatePage>
      <div className="my-12 font-spartan text-u-off-white">
        <h1 className="text-4xl text-center mb-8">Contact Us Here</h1>
        <Form>
          <Form.Input
            name="fName"
            type={Form.InputTypes.Input}
            placeHolder="Enter your first name.."
          >
            First Name
          </Form.Input>
          <Form.Input
            type={Form.InputTypes.Input}
            name="lName"
            placeHolder="Enter your last name.."
          >
            Last Name
          </Form.Input>
          <Form.Input
            type={Form.InputTypes.Email}
            name="email"
            placeHolder="Enter your email.."
          >
            Email
          </Form.Input>
          <Form.Input
            type={Form.InputTypes.TextArea}
            name="message"
            placeHolder="Write your message here.."
          >
            Message
          </Form.Input>
          <Form.Submit>Submit</Form.Submit>
        </Form>
      </div>
    </TemplatePage>
  );
};
