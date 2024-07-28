const HomeIcon = ({ fill, width, height }: { fill: string, width: string, height: string }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M12 3l9 8h-3v10h-4v-6h-4v6H6V11H3l9-8zm0-3L0 12h4v10h8v-6h4v6h8V12h4L12 0z"
        fill={fill}
      />
    </svg>
  );
};

export default HomeIcon;
