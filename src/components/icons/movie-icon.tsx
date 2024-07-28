const MovieIcon = ({ fill, width, height }: { fill: string, width: string, height: string }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M20 3H4a1 1 0 0 0-.96 1.27l1.73 6.9a1 1 0 0 0 .96.73H18.27a1 1 0 0 0 .96-.73l1.73-6.9A1 1 0 0 0 20 3zM4 12v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-9H4zm10 7h-2v-4h2v4zm-4 0H8v-4h2v4zM16 7.35l-.34 1.35H9.94L9.6 7.35h6.4zm1.93-1.36l-.31 1.24H7.38l-.31-1.24H17.93zM5.56 3h12.88l.31 1.24H5.25L5.56 3z"
        fill={fill}
      />
    </svg>
  );
};

export default MovieIcon;

