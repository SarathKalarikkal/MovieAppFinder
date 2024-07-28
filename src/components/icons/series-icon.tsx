const TvSeriesIcon = ({ fill, width, height }: { fill: string, width: string, height: string }) => {
  return (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        d="M21 6h-4.586l2.293-2.293a1 1 0 0 0-1.414-1.414L12 7.586 6.707 2.293a1 1 0 0 0-1.414 1.414L7.586 6H3a3 3 0 0 0-3 3v9a3 3 0 0 0 3 3h18a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3zm1 12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v9z"
        fill={fill}
      />
      <rect x="6" y="10" width="12" height="8" fill={fill} />
    </svg>
  );
};

export default TvSeriesIcon;
