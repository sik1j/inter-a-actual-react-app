import React from "react";

export enum InputTypes {
  Input = "input",
  Email = "email",
  Number = "number",
  TextArea = "textarea",
}

interface Props {
  type: InputTypes;
  name: string;
  children: any;
  id?: string;
  placeHolder?: string;
  handleChange?: any;
}

export const Input: React.FC<Props> = ({
  type,
  name,
  children,
  id = name,
  placeHolder,
  handleChange,
}) => {
  const renderInputType = () => {
    if (type === InputTypes.TextArea) {
      return (
        <textarea
          className="rounded-md py-3 px-2 tracking-wide border-2 border-[#666] resize-y h-40 text-u-off-black"
          name={name}
          id={id}
          placeholder={placeHolder}
        ></textarea>
      );
    } else {
      return (
        <input
          className="rounded-md py-3 px-2 tracking-wider border-2 border-[#666] text-u-off-black focus:outline-2 focus:outline-u-green-primary hover:outline-2 hover:outline-u-green-primary"
          type={type}
          name={name}
          id={id}
          placeholder={placeHolder}
          onChange={(e) => handleChange(e)}
        />
      );
    }
  };
  return (
    <div className="flex flex-col">
      <label className="text-xl pb-1 font-medium" htmlFor={name}>
        {children}
      </label>
      {renderInputType()}
    </div>
  );
};
