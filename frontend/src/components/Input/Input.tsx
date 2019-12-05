import React, { FC, ReactNode, FormEventHandler } from 'react';

export interface AppProps {
  children?: ReactNode;
  onBlur?: FormEventHandler;
  onChange?: FormEventHandler;
  value?: any;
}

const Input: FC<AppProps> = (props: AppProps) => (
  <input {...props}>{props.children}</input>
);

Input.defaultProps = {
  children: null
};

export default Input;
