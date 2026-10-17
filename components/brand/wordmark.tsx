interface WordmarkProps {
  size?: "header" | "footer";
}

export const Wordmark = ({ size = "header" }: WordmarkProps) => {
  return (
    <span className={`wordmark wordmark--${size}`}>
      <span className="wordmark__name">lacosta</span>
      <span className="wordmark__suffix">
        <span className="wordmark__dot">.</span>dev
      </span>
    </span>
  );
};
