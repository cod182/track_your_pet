import React from 'react';

declare interface TitleCompProps {
  title: string;
  color?: string;
  size: string;
  position: 'center' | 'start' | 'end';
  textDecoration?: string | 'none';
  extraTextCss?: string;
}

const TitleComp = ({
  title,
  color,
  size,
  position,
  textDecoration,
  extraTextCss,
}: TitleCompProps) => {
  return (
    <div className="w-full h-fit mx-auto py-2">
      <p
        className={`${extraTextCss}`}
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
