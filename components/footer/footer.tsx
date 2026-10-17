// @app
import { Wordmark } from "@components/brand/wordmark";

export const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <Wordmark size="footer" />
        <p className="site-footer__colophon">
          Set in Geist &amp; Martian Mono · Built with Next.js
        </p>
      </div>
    </footer>
  );
};
