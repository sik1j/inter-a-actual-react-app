import React from "react";

interface Props {
  children: any;
  handleClick?: any;
}

export const Submit: React.FC<Props> = ({
  children,
  handleClick = () => null,
}) => {
  return (
    <input
      type="submit"
      value={children}
      className="mx-auto tracking-wider py-2 px-7 pt-3 font-medium text-u-off-white bg-transparent rounded-full border-2 border-u-off-white cursor-pointer hover:bg-u-off-white hover:text-u-green-accent ease-out duration-200"
      // onClick={() => handleClick()}
      //1 onClick={() => handleClick()}

      onClick={() => handleClick()}
    />
  );
};
