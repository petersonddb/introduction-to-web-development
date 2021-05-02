import './Link.css'

const Link = ({ to, children }) => {
  return (
    <a className="link" href={to}>
      {children}
    </a>
  );
}

export default Link;
