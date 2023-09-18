import React from 'react';

declare interface TitleCompProps {
  title: string;
  color: string;
  size: string;
  position: 'center' | 'start' | 'end';
  textDecoration?: string | 'none';
}

const TitleComp = ({
  title,
  color,
  size,
  position,
  textDecoration,
}: TitleCompProps) => {
  return (
    <div className="w-full h-fit mx-auto py-2">
      <p
        style={{
          fontSize: size,
          color: color,
          textDecoration: textDecoration,
          textAlign: position,
        }}
      >
        {title}
      </p>
    </div>
  );
};

export default TitleComp;
