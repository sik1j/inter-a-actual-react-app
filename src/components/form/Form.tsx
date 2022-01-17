import React, { Component } from "react";
import { Input, InputTypes } from "./Input";
import { Submit } from "./Submit";

interface Props {
  className?: string;
}

export default class Form extends Component<Props> {
  public static Input = Input;
  public static Submit = Submit;
  public static InputTypes = InputTypes;

  render() {
    return (
      <form
        className={`w-9/12 max-w-xl mx-auto flex flex-col bg-u-green-accent px-6 py-6 rounded-3xl space-y-5 ${this.props.className}`}
      >
        {this.props.children}
      </form>
    );
  }
}
