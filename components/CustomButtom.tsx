"use client";
import {CustomButtomProps} from '@/types'

export const CustomButtom = ({title,containerStyles,handleClick}:CustomButtomProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`flex-1`}>
        {title}
      </span>
    </button>
  );
};
