import LOGO from "../assets/LOGO-WITH-NAME.png";

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center justify-between p-8">
      <img src={LOGO} className="h-24 mx-auto" />
    </header>
  );
};
